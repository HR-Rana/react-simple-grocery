





export const DiscountFunc = (a,b) =>{
    let AmountPrice = parseInt(a);
    let Discount = parseInt(b);
    let DiscountPrice = (AmountPrice * Discount) /100
    let Result = AmountPrice - DiscountPrice; 
    return Math.ceil(Result);
}





