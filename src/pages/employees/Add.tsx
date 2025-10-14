import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { FieldsetCard } from "../../components/FieldsetCard";
import { FormCard } from "../../components/FormCard";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { InputGroup } from "../../components/InputGroup";
import { Radio } from "../../components/Radio";
import { Employee, Gender, Type } from "../../interfaces/employee";
import { serialized } from "../../libs/fractal";
import { postEmployeeRequest } from "../../services/employees";

export default function EmployeesAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>();
  const navigate = useNavigate();

  const onSubmit = async (employee: Employee) => {
    try {
      const response = await postEmployeeRequest(
        serialized(employee, "employees")
      );
      if (response.status === 201) {
        navigate("/employees/list", { replace: true, viewTransition: true });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.message);
      }
    }
  };

  return (
    <section>
      <Header title="Agregar empleado" />

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
              required: "El telefono es obligatorio",
              minLength: {
                value: 8,
                message: "El telefono debe tener 8 caracteres",
              },
              maxLength: {
                value: 8,
                message: "El telefono debe tener 10 caracteres",
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

          <InputGroup
            legend="Selecciona tipo de empleado"
            error={errors.type?.message}
          >
            <Radio
              id="admin"
              labelText="Administrador"
              value={Type.AD}
              {...register("type", {
                required: "El tipo de empleado es obligatorio",
              })}
            />
            <Radio
              id="cook"
              labelText="Cocinero"
              value={Type.CO}
              {...register("type", {
                required: "El tipo de empleado es obligatorio",
              })}
            />
            <Radio
              id="cashier"
              labelText="Cajero"
              value={Type.CA}
              {...register("type", {
                required: "El tipo de empleado es obligatorio",
              })}
            />
            <Radio
              id="waiter"
              labelText="Mesero"
              value={Type.WA}
              {...register("type", {
                required: "El tipo de empleado es obligatorio",
              })}
            />
          </InputGroup>
        </FieldsetCard>
      </FormCard>
    </section>
  );
}
