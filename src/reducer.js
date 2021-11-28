import { act } from "react-dom/test-utils";

export const initialState={
    cart:[],
};
const reducer=(state,action)=>{
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