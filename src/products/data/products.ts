
export interface Product {
  id    : string;
  name  : string;
  price : number;
  rating: number;
  image : string;
}

export interface ProductInCart {
  product: Product
  quantity: number
}

export const products:Product[] = [
  {
    id: 'UUID-ABC-1',
    name: 'Laptop',
    price: 599,
    rating: 5,
    image: '/images/products/laptop.webp',
  },
  {
    id: 'UUID-ABC-2',
    name: 'Tablet',
    price: 399,
    rating: 4,
    image: '/images/products/tablet.webp',
  },
  {
    id: 'UUID-ABC-3',
    name: 'Keyboard',
    price: 59,
    rating: 5,
    image: '/images/products/keyboard.webp',
  },
  {
    id: 'UUID-ABC-4',
    name: 'Mouse',
    price: 39,
    rating: 5,
    image: '/images/products/mouse.webp',
  },{
    id: 'UUID-ABC-5',
    name: 'Speakers',
    price: 79,
    rating: 4,
    image: '/images/products/speakers.webp',
  },
]