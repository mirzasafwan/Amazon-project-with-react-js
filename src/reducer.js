import { act } from "react-dom/test-utils";

export const initialState={
    cart:[],
    user:null,
};

export const getCartTotal=(cart)=>
cart?.reduce((amount,item)=>amount+item.price,0);
const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
    case "Add_to_Cart":
    return{
        ...state,
        cart:[...state.cart,action.item],
    };

    case "Remove_From_Cart":
        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);

            let newCart = [...state.cart];

            if(index >=0)
            {
                newCart.splice(index,1);
            } else{
                console.warn('Cant remove, as cart is Empty')
            }
            return{
                ...state,
                cart: newCart
            }
            case "SET_USER":
                return{
                    ...state,
                    user:action.user
                }
    default:
        return state;
    }
}
export default reducer;