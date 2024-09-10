import { getCookie, hasCookie, setCookie } from "cookies-next"


export const getCookieCart = ():{[id:string]:number} => {

  if ( hasCookie('cart') ) {
    const cookieCart  = JSON.parse(getCookie('cart') as string ?? '{}' )
    return cookieCart 
  }

  return {};

}

export const addProductCookieCart = (id:string) => {

  const cookieCart = getCookieCart();

  if ( cookieCart[id] ) {
    cookieCart[id] += 1;
  } else {
    cookieCart[id] = 1
  }

  setCookie('cart', JSON.stringify(cookieCart));

}

export const removeProductCookieCart = (id:string) => {
  
  const cookieCart = getCookieCart();

  if(cookieCart[id]) {
    delete cookieCart[id];
  } else {
    return
  }

  setCookie('cart', JSON.stringify(cookieCart));


}

export const removeSingleItemCookieCart = (id:string) => {

  const cookieCart = getCookieCart();

  if (cookieCart[id] > 1) {
    cookieCart[id] --;
  } else {
    delete cookieCart[id];
  }

  setCookie('cart', JSON.stringify(cookieCart));
  console.log(cookieCart)

}