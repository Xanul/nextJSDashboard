import { SimpleWidget, WidgetsGrid } from "@/components";
import { HeaderBar } from "@/components/header/HeaderBar";

export const metadata = {
  title: "Main Dashboard",
  description: "Main Dashboard",
};

export default function MainPage() {
  return (
    <div>
      <HeaderBar
        title="Dashboard"
        subTitle="General Info"
        description="Welcome to the NextDash dashboard! This project is designed to showcase the diverse functionalities of Next.js, including server-side rendering, client-side rendering, and global state management using Redux. Explore how these features enhance the performance, efficiency, and user experience of web applications, providing a comprehensive demonstration of Next.js capabilities."
      />
      <WidgetsGrid />
    </div>
  );
}
