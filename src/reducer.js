import { act } from "react-dom/test-utils";

export const initialState={
    cart:[],
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
        return{...state,
            cart:state.cart.filter(item=>item.id!=action.id)
        }
    default:
        return state;
    }
}
export default reducer;