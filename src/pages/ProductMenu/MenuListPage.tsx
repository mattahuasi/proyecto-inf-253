import { useState } from "react";
import { ProductItem } from "./ProductItem";
import { ListOrderProducts } from "./ListOrderProducts";
import { Button } from "../../components/Button";
import { AuthLayout } from "../../layouts/AuthLayout";

interface NewProducts {
  id: string;
  name: string;
  price: number;
  quantity: number;
  subTotal: number;
}

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MenuProps {
  listProducts: Product[];
}

export const MenuListPage: React.FC<MenuProps> = ({ listProducts }) => {
  const [listOrder, setListorder] = useState<NewProducts[]>([]);

  const handleOrder = (order: NewProducts) => {
    setListorder([...listOrder, order]);
  };

  return (
    <AuthLayout title="Menu">
      <div className="flex w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {listProducts.map((itemMenu, index) => (
            <ProductItem
              key={index}
              product={itemMenu}
              onAddProduct={handleOrder}
            />
          ))}
        </div>
        <div className="flex flex-col w-full mt-8 p-10">
          <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Cantidad de platos Precio total
          </h1>

          <ListOrderProducts listOrder={listOrder} />
          <Button color={"secondary"} label="Confirmar Pedido" />
        </div>
      </div>
    </AuthLayout>
  );
};
