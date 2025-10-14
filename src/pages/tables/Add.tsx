import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FieldsetCard } from "../../components/FieldsetCard";
import { FormCard } from "../../components/FormCard";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { InputGroup } from "../../components/InputGroup";
import { Radio } from "../../components/Radio";
import { toastAxiosError } from "../../helpers/helpers";
import { Status, Table } from "../../interfaces/table";
import { serialized } from "../../libs/fractal";
import { postTableRequest } from "../../services/tables";

export default function TableAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Table>();
  const navigate = useNavigate();

  const onSubmit = async (table: Table) => {
    try {
      const response = await postTableRequest(serialized(table, "tables"));

      if (response.status === 201) {
        toast.success("Mesa creada correctamente");
        navigate("/tables/list", { viewTransition: true });
      }
    } catch (error) {
      toastAxiosError(error as Error);
    }
  };

  return (
    <section>
      <Header title="Agregar mesa" />
      <FormCard onSubmit={handleSubmit(onSubmit)}>
        <FieldsetCard legend="Datos generales">
          <Input
            id="number"
            labelText="Número"
            type="number"
            placeholder="1"
            {...register("number", {
              required: "El número es obligatorio",
              max: {
                value: 50,
                message: "El número debe ser menor o igual a 50",
              },
            })}
            error={errors.number?.message}
          />

          <Input
            id="ability"
            labelText="Habilidad"
            type="number"
            placeholder="4-8"
            {...register("ability", {
              required: "La habilidad es obligatoria",
              min: {
                value: 4,
                message: "La habilidad debe ser mayor o igual a 0",
              },
              max: {
                value: 8,
                message: "La habilidad debe ser menor o igual a 8",
              },
            })}
            error={errors.ability?.message}
          />

          <InputGroup
            legend="Selecciona el estado"
            error={errors.status?.message}
          >
            <Radio
              id="status"
              labelText="Disponible"
              value={Status.Available}
              {...register("status", { required: "El estado es obligatorio" })}
            />
            <Radio
              id="status"
              labelText="Ocupado"
              value={Status.Busy}
              {...register("status", { required: "El estado es obligatorio" })}
            />
            <Radio
              id="status"
              labelText="Esperando"
              value={Status.Waiting}
              {...register("status", { required: "El estado es obligatorio" })}
            />
          </InputGroup>
        </FieldsetCard>
      </FormCard>
    </section>
  );
}
