import { AllProducts } from "../DemoData/ProductData";






export const DiscountFunc = (a, b) => {
    let AmountPrice = parseInt(a);
    let Discount = parseInt(b);
    let DiscountPrice = (AmountPrice * Discount) / 100
    let Result = AmountPrice - DiscountPrice;
    return Math.ceil(Result);
}



export const SingleFilter = (itemInfo, data) => {
    const result = AllProducts.filter((item, i) => {
        item.itemInfo === data;
    })

    console.log(itemInfo, data, result)
}




export const SliceProduct = (a, b) => {
    const Result = AllProducts.slice(a, b);
    return Result
}


