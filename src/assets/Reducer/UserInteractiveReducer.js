
export let InteractiveInit = {
    Cart: [],
    AddFav: [],
    UserAuth: false,
    PQuantity: 1,
    RecentlyViewd: [],
    deliveryInfo: {
        name: "",
        email: "",
        phone: "",
        Disctrict: "",
        SubDiscrtict: " ",
        homeTown: " ",
        ZipCode: " ",
        RoadInfo: " "
    },
    Nav: false,
}


export let UserInteractiveReducer = (state, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                Cart: action.payload
            }
        case "REMOVE_CART":
            return {
                ...state,
                Cart: state.Cart.filter((items) => items !== action.payload)
            }
        case "ADD_FAV":
            return {
                ...state,
                AddFav: action.payload
            }
        case "Remove_FAV":
            return {
                ...state,
                AddFav: state.AddFav.filter((item) => item !== action.payload)
            }
        case "QUANTITY_INCREASE":
            return {
                ...state,
                PQuantity: state.PQuantity + 1
            }
        case "CUSTOM_QUANTITY":
            return {
                ...state,
                PQuantity: action.payload
            }
        case "Quantity_DICREASE":
            return {
                ...state,
                PQuantity: state.PQuantity - 1
            }
        case "AUTH-VALID":
            return {
                ...state,
                UserAuth: action.payload
            }
        case "VISITED_PRODUCT":
            return {
                ...state,
                RecentlyViewd: action.payload
            }

        case "HIDE_NAVBAR":
            console.log(action.payload)
            return {
                ...state,
                Nav: action.payload
            }
        default:
            return state
    }
}