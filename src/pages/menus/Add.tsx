import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import slug from "slug";
import { Checkbox } from "../../components/Checkbox";
import { FieldsetCard } from "../../components/FieldsetCard";
import { FormCard } from "../../components/FormCard";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { InputGroup } from "../../components/InputGroup";
import { Radio } from "../../components/Radio";
import { Select } from "../../components/Select";
import { useRequest } from "../../hooks/useRequest";
import { Category } from "../../interfaces/category";
import { Menu, Priority } from "../../interfaces/menu";
import { deserialized, serialized } from "../../libs/fractal";
import { getCategoriesRequest } from "../../services/categories";
import { postMenuRequest } from "../../services/menus";

export default function MenuAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Menu & { category: { id: string } }>();
  const navigate = useNavigate();
  const { response } = useRequest(getCategoriesRequest);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setCategories(deserialized(response?.data || []));
  }, [response]);

  const onSubmit = async (menu: Menu & { category: { id: string } }) => {
    const menuSlug = slug(menu.name);
    menu.slug = menuSlug;
    menu.photoUrl = "http://picsum.photos/200/300";
    menu.enabled = true;

    const payload = serialized(menu, "menus", ["category"]);

    try {
      const response = await postMenuRequest(payload);
      if (response.status === 201) {
        toast.success("Menú creado correctamente");
        navigate("/menus/list", { viewTransition: true });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errors = error.response?.data.errors;

        if (errors && Array.isArray(errors)) {
          errors.forEach((err) => {
            toast.error(err.detail);
          });
        } else {
          toast.error(error.response?.data.message);
        }
      } else {
        toast.error("Error desconocido al crear el menú");
      }
    }
  };

  return (
    <section>
      <Header title="Agregar menu" />

      <FormCard onSubmit={handleSubmit(onSubmit)}>
        <FieldsetCard legend="Datos generales">
          <Input
            id="name"
            labelText="Nombre"
            type="text"
            placeholder="Pollo a la brasa"
            {...register("name", {
              required: "El nombre es obligatorio",
            })}
            error={errors.name?.message}
          />

          <Input
            id="description"
            labelText="Descripción"
            type="text"
            placeholder="Delicioso y saludable"
            {...register("description")}
          />

          <Input
            id="price"
            labelText="Precio"
            type="number"
            placeholder="10"
            {...register("price", {
              required: "El precio es obligatorio",
              min: {
                value: 0,
                message: "El precio debe ser mayor o igual a 0",
              },
            })}
            error={errors.price?.message}
          />

          <Input
            id="stock"
            labelText="Stock"
            type="number"
            placeholder="10"
            {...register("stock", {
              required: "El stock es obligatorio",
              min: {
                value: 0,
                message: "El stock debe ser mayor o igual a 0",
              },
            })}
            error={errors.stock?.message}
          />

          <Select
            id="categories"
            label="Categoría"
            list={categories}
            error={errors.category?.message}
            {...register("category.id", {
              required: "La categoría es obligatoria",
            })}
          />

          <InputGroup
            legend="Selecciona la prioridad"
            error={errors.priority?.message}
          >
            <Radio
              id="priority"
              labelText="Alta"
              value={Priority.H}
              {...register("priority")}
            />
            <Radio
              id="priority"
              labelText="Media"
              value={Priority.M}
              {...register("priority")}
            />
            <Radio
              id="priority"
              labelText="Baja"
              value={Priority.L}
              {...register("priority")}
            />
          </InputGroup>

          <InputGroup
            legend="Selecciona el estado"
            error={errors.enabled?.message}
          >
            <Checkbox id="enabled" labelText="Habilitado" />
            <Checkbox id="enabled" labelText="Deshabilitado" />
          </InputGroup>
        </FieldsetCard>
      </FormCard>
    </section>
  );
}
