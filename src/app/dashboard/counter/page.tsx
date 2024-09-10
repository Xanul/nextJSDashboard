import { HeaderBar } from "@/components";
import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: "Client-Side Counter",
  description: "A simple counter using client-side rendering",
};

export default function CounterPage() {

  return (
    <div className="flex flex-col h-full">
      <HeaderBar 
        title="Counter" 
        subTitle="Client Side Rendering"
        description="Welcome to the Counter section! This part of the dashboard utilizes client-side rendering to dynamically update and display the counter in real-time. Here, you can interact with the counter, incrementing or decrementing the value as you wish. This example demonstrates the power of Next.js in handling client-side and server-side interactivity efficiently, providing a seamless and responsive user experience. You can see the same number in the dashboard thanks to the use of global state and Redux"
      />
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h2 className="font-semibold text-2xl tracking-tight">Counter</h2>
        <CartCounter value={12} />
      </div>
    </div>
  );
}
