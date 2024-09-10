import { HeaderBar } from "@/components/header/HeaderBar";
import { CartCard } from "@/products";
import { products, type Product } from "@/products/data/products";
import { removeSingleItemCookieCart } from "@/shopping-cart/actions/actions";
import { cookies } from "next/headers";
import { IoCartOutline } from "react-icons/io5";
import { WidgetItem } from '../../../components/dashboard/WidgetItem';

export const metadata = {
 title: 'Products in Cart',
 description: 'Products in Cart',
};

interface ProductInCart {
  product: Product
  quantity: number
}


const getProductsInCart = (cart:{[id:string]: number}) => {

  const productsInCart:ProductInCart[] = [];

  for (const id of Object.keys(cart)) {
    const product = products.find(prod => prod.id === id)
    if ( product ) {
      productsInCart.push({product: product, quantity: cart[id]})
    }
  }

  return productsInCart;

}

export default function CartPage() {

  const cookiesCart = cookies();
  const cart = JSON.parse(cookiesCart.get('cart')?.value ?? '{}');
  const productsInCart = getProductsInCart(cart);

  const totalToPay = productsInCart.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0)
  

  return (
    <div>
      <HeaderBar 
        title="Products in Cart"
        subTitle="Products in cart using cookies"
        description="This is a description"
      />
      <div className="flex flex-col md:flex-row gap-2 w-full ml-5">
      <div className="flex flex-col gap-2 w-full md:w-8/12">
          {
            productsInCart.map(({product, quantity}) => (
              <CartCard product={product} quantity={quantity} key={product.id}/>
            ))
          }
        </div>
        <div className="flex flex-col w-full md:w-4/12">
          <WidgetItem title="Total">
            <div className="mt-2 flex justify-center gap-4">
              <h3 className="text-3xl font-bold text-gray-700">${totalToPay.toFixed(2)}</h3>
            </div>
            <span className="font-bold text-center text-gray-500">Impuestos $500</span>
          </WidgetItem>
        </div>
      </div>
    </div>
  );
}