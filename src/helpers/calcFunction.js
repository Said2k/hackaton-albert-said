export function getCountProductInCart(){
    const cart = JSON.parse(localStorage.getItem('cart'))
    return cart? cart.products: 0
}

export const calcSubPrice = (elem) => +elem.count * elem.item.price;

export const calcTotalPrice = (mass) =>{
    return mass.reduce((acc,curr)=>{
        return (acc += curr.subPrice)
        // console.log(curr.subPrice);
    }, 0)
}
