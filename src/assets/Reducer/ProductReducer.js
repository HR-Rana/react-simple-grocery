
export let initialState = {

    id: "",
    title: "",
    description: "",
    name: "",
    catagory: "",
    image: "",
    subImage: {
        img1: "",
        img2: "",
        img3: ""
    },
    stock: 500,
    lavel: "",
    off: "",
    error: ""

}



export const ProductReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return {
                ...state,
                name: state.name
            }
            break;
        case "ERROR":
            return {
                ...state,
                error: state.error
            }
            break;
        case "ADD_PRODUCT":
            return {

            }
            break;
        case "REMOVE_PRODUCT":
            return {

            }
            break;
        default:
            break;
    }
}