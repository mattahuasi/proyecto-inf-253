import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FieldsetCard } from "../../components/FieldsetCard";
import { FormCard } from "../../components/FormCard";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { InputGroup } from "../../components/InputGroup";
import { Radio } from "../../components/Radio";
import { Customer } from "../../interfaces/customer";
import { Gender } from "../../interfaces/employee";
import { serialized } from "../../libs/fractal";
import { postCustomerRequest } from "../../services/customers";

export default function CustomerAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Customer>();
  const navigate = useNavigate();

  const onSubmit = async (customer: Customer) => {
    try {
      const response = await postCustomerRequest(
        serialized(customer, "customers")
      );
      if (response.status === 201) {
        toast.success("Cliente creado correctamente");
        navigate("/customers/list", { replace: true, viewTransition: true });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
      toast.error("Error al crear cliente");
    }
  };

  return (
    <section>
      <Header title="Agregar cliente" />

      <FormCard onSubmit={handleSubmit(onSubmit)}>
        <FieldsetCard legend="Datos personales">
          <Input
            id="paternalSurname"
            labelText="Apellido paterno"
            type="text"
            placeholder="Centeno"
            {...register("paternalSurname", {
              required: "El apellido paterno es obligatorio",
            })}
            error={errors.paternalSurname?.message}
          />
          <Input
            id="maternalSurname"
            labelText="Apellido materno"
            type="text"
            placeholder="Asensio"
            {...register("maternalSurname", {
              required: "El apellido materno es obligatorio",
            })}
            error={errors.maternalSurname?.message}
          />
          <Input
            id="names"
            labelText="Nombres"
            type="text"
            placeholder="Laia"
            {...register("names", {
              required: "Los nombres son obligatorios",
            })}
            error={errors.names?.message}
          />
          <Input
            id="phone"
            labelText="Telefono"
            type="tel"
            placeholder="123456789"
            {...register("phone", {
              required: "El teléfono es obligatorio",
              minLength: {
                value: 8,
                message: "El teléfono debe tener 8 caracteres",
              },
              maxLength: {
                value: 8,
                message: "El teléfono debe tener 10 caracteres",
              },
            })}
            error={errors.phone?.message}
          />

          <InputGroup
            legend="Selecciona el genero"
            error={errors.gender?.message}
          >
            <Radio
              id="female"
              labelText="Femenino"
              value={Gender.F}
              {...register("gender", { required: "El genero es obligatorio" })}
            />
            <Radio
              id="male"
              labelText="Masculino"
              value={Gender.M}
              {...register("gender", { required: "El genero es obligatorio" })}
            />
          </InputGroup>
        </FieldsetCard>
      </FormCard>
    </section>
  );
}
