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
}




export const SliceProduct = (a, b) => {
    const Result = AllProducts.slice(a, b);
    return Result
}

const arry = [5, 35, 12, 635, 75];
const result = arry.sort((a, b) => a - b);

export const MinToMax = (data) => {
    const Result = data.sort((a, b) => a + b);
    return Result
}

export const MaxToMin = (data) => {
    const Result = data.sort((a, b) => (a + b))
    console.log(Result)
    return Result
}


export const RandomProduct = (arry) => {
    console.log(arry[Math.ceil(Math.random() * arry.length)])
}


export const AddToCartHandler = (id) => {
    console.log(id)
}


