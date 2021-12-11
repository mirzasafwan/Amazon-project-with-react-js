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
    default:
        return state;
    }
}
export default reducer;