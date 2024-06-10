import { CartCounter } from "@/shopping-cart";

export const metadata = {
 title: 'Shopping Cart',
 description: 'A Simple Counter',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in cart</span>
      <CartCounter value={12}/>
    </div>
  );
}


