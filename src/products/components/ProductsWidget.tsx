import {
  ProductInCart,
  products,
  type Product,
} from "@/products/data/products";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

interface Props {
  cart?: ProductInCart[];
}

export const ProductsWidget = ({ cart }: Props) => {

  return (
    <div className="bg-white shadow-xl p-3 min-w-full lg:min-w-[49%] rounded-2xl border border-gray-200">
      <div className="flex flex-col h-full">
        <div>
          <h2 className="font-bold text-gray-600 text-center">
            Products in Cart
          </h2>
        </div>
        {cart?.length == 0 && (
          <div className="flex-grow flex flex-col items-center justify-center my-3">
            <IoCartOutline size={50} className="text-blue-500" />
            <h4 className="text-center text-xs text-gray-500">
              No Items In Cart
            </h4>
          </div>
        )}
        {cart!.length > 0 && (
          <div className="flex-grow flex flex-col items-center mt-4 space-y-2">
            {cart?.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex items-center w-full shadow rounded-lg bg-white border-gray-100"
              >
                <div className="p-1">
                  <Image
                    width={100}
                    height={100}
                    src={product.image}
                    alt={product.name}
                    key={product.id}
                  />
                </div>
                <div className="px-5 pb-5 w-full flex flex-col mt-2">
                  <h3 className="font-semibold text-xl tracking-tight">
                    {product.name}
                  </h3>
                  <div className="flex flex-col items-start justify-between">
                    <span className=" dark:text-white">
                      Cantidad: {quantity}
                    </span>
                    <span className="font-bold">
                      Total: ${(product.price * quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
          <Link
            href={"/dashboard/cart"}
            className="text-indigo-600 text-xs font-medium"
          >
            Go To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};
