interface NewProducts {
  id: string;
  name: string;
  price: number;
  quantity: number;
  subTotal: number;
}
interface OrderProps {
  listOrder: NewProducts[];
}

export const ListOrderProducts: React.FC<OrderProps> = ({ listOrder }) => {
  const totalPrice = listOrder.reduce(
    (total, order) => total + order.subTotal,
    0
  );
  const totalQuantity = listOrder.reduce(
    (total, order) => total + order.quantity,
    0
  );

  console.log(JSON.stringify(listOrder));

  return (
    <section className="products-buy">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order
              </th>
              <th scope="col" className="px-6 py-3">
                Price c/u
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Sub Total
              </th>
            </tr>
          </thead>
          <tbody>
            {listOrder.map((product, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.name}
                </th>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.quantity}</td>
                <td className="px-6 py-4">{product.subTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-section">
          <h4>Total Quantity: {totalQuantity}</h4>
          <h4>Total Price: ${totalPrice}</h4>
        </div>
      </div>
    </section>
  );
};
