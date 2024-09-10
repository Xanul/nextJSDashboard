import { HeaderBar } from "@/components/header/HeaderBar"
import { ProductCard, TopMenu } from "@/products";
import { products } from "@/products/data/products";


export default function StorePage() {
  return (
    <div>
      <HeaderBar 
        title="Store Page"
        subTitle="Using Cookies"
        description="Using Cookies"
      />
      <TopMenu />
      <div className="ml-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {
          products.map(product => (
            <ProductCard key={product.id} {...product}/>
          ))
        }
      </div>
    </div>
  );
}