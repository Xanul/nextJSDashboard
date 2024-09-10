import { SimpleWidget, WidgetsGrid } from "@/components";
import { HeaderBar } from "@/components/header/HeaderBar";
import { Product, ProductInCart, products } from "@/products/data/products";
import { cookies } from "next/headers";

export const metadata = {
  title: "Main Dashboard",
  description: "Main Dashboard",
};

const getProductsInCart = ():ProductInCart[] => {

  const cookiesCart = cookies();
  const cart = JSON.parse(cookiesCart.get('cart')?.value ?? '{}');
  const productsInCart = [];
  
  for (const id of Object.keys(cart)) {
    const product = products.find(prod => prod.id === id)
    if ( product ) {
      productsInCart.push({product: product, quantity: cart[id]})
    }
  }

  return productsInCart;

}

export default function MainPage() {
  
  getProductsInCart();
  return (
    <div>
      <HeaderBar
        title="Dashboard"
        subTitle="General Info"
        description="Welcome to the NextDash dashboard! This project is designed to showcase the diverse functionalities of Next.js, including server-side rendering, client-side rendering, and global state management using Redux. Explore how these features enhance the performance, efficiency, and user experience of web applications, providing a comprehensive demonstration of Next.js capabilities."
      />
      <WidgetsGrid cart={getProductsInCart()} />
    </div>
  );
}
