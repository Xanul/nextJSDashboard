import { HeaderBar } from "@/components/header/HeaderBar";
import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: "Shopping Cart",
  description: "A Simple Counter",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col w-full h-full">
      <HeaderBar 
        title="Counter" 
        subTitle="Client Side Rendering"
        description="Welcome to the Counter section! This part of the dashboard utilizes client-side rendering to dynamically update and display the counter in real-time. Here, you can interact with the counter, incrementing or decrementing the value as you wish. This example demonstrates the power of Next.js in handling client-side interactivity efficiently, providing a seamless and responsive user experience."
      />
      <div className="flex flex-col items-center justify-center w-full h-full">
        <span>Products in cart</span>
        <CartCounter value={12} />
      </div>
    </div>
  );
}
