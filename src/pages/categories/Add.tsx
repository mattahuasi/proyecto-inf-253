import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Slug from "slug";
import { FieldsetCard } from "../../components/FieldsetCard";
import { FormCard } from "../../components/FormCard";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Category } from "../../interfaces/category";
import { serialized } from "../../libs/fractal";
import { postCategoryRequest } from "../../services/categories";

export default function CategoryAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Category>();
  const navigate = useNavigate();

  const onSubmit = async (category: Category) => {
    const slug = Slug(category.name);
    category.slug = slug;

    try {
      const response = await postCategoryRequest(
        serialized(category, "categories")
      );
      if (response.status === 201) {
        toast.success("Categoría creada correctamente");
        navigate("/categories/list", { replace: true, viewTransition: true });
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
      <Header title="Agregar categoría" />

      <FormCard onSubmit={handleSubmit(onSubmit)}>
        <FieldsetCard legend="Datos generales">
          <Input
            id="name"
            labelText="Nombre de la categoría"
            type="text"
            placeholder="Entrantes"
            error={errors.name?.message}
            {...register("name", {
              required: "El nombre de la categoría es obligatorio",
            })}
          />

          <Input
            id="priority"
            labelText="Prioridad"
            type="text"
            placeholder="0-9"
            error={errors.priority?.message}
            {...register("priority", {
              pattern: {
                value: /^[0-9]$/,
                message: "Debe ser un único dígito entre 0 y 9",
              },
              required: "La prioridad es obligatoria",
            })}
          />

          <TextArea
            id="description"
            labelText="Descripción"
            cols={30}
            rows={10}
            error={errors.description?.message}
            {...register("description")}
          />
        </FieldsetCard>
      </FormCard>
    </section>
  );
}
