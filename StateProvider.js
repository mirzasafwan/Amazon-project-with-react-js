// import React,{createContext,useReducer,useContext} from 'react';
// //prepare data layer
// export const StateContext=createContext(); 
// //wrap our Application
// export const StateProvider=({reducer,initialState,children})=>(
//     <StateContext.Provider value={useReducer(reducer,initialState)}>
//         {children}
//     </StateContext.Provider>
// )
// export const useReducer=()=>useContext(StateContext);

import React,{ createContext,useReducer,useContext} from "react";
//Prepares DataLayer
export const StateContext=createContext();
//Wrap our App and provide the data layer
const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
); 
//Pull Information from Data Layer
export const useContextValue=()=>useContext();