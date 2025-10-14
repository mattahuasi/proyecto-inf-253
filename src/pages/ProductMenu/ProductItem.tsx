import { useState } from "react";
import { Counter } from "../../components/Counter";
import { Button } from "../../components/Button";

interface NewProducts {
  id: string;
  name: string;
  price: number;
  quantity: number;
  subTotal: number;
}
interface Product {
  id?: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

interface ProductsItemProps {
  onAddProduct: (product: NewProducts) => void;
  product: Product;
}

const ProductItem: React.FC<ProductsItemProps> = ({
  product,
  onAddProduct,
}) => {
  const [counter, setCounter] = useState(0);
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  const handleDecrease = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };
  const calculateSubtotal = (price: number, quantity: number) =>
    price * quantity;

  const handleSendProduct = () => {
    const newProduct = {
      id: crypto.randomUUID(),
      name: product.name,
      price: product.price ?? 0,
      quantity: counter,
      subTotal: calculateSubtotal(product.price, counter),
    };
    onAddProduct(newProduct);
  };

  return (
    <div
      key={product.id}
      className="bg-white shadow-md rounded-lg flex flex-col items-center w-full max-w-sm overflow-hidden pb-4"
    >
      <div className="w-full h-60 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 w-full">
        <article className="text-lg font-bold mb-2">
          <strong>{product.name}</strong>
        </article>

        <p className="text-gray-600 text-sm mb-4">{product.description}</p>

        <article className="text-lg font-semibold">
          <strong>Price: ${product.price}</strong>
        </article>
      </div>

      <div className="w-full p-4 flex justify-center items-center">
        <Counter
          count={counter}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </div>
      <Button
        color={"tertiary"}
        label="Add Product"
        onClick={handleSendProduct}
      />
    </div>
  );
};

export { ProductItem };
