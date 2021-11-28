import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer,{initialState} from './reducer'

 ReactDOM.render(
   <React.StrictMode>
     <StateProvider initialState={initialState} reducer={reducer}>
     <App />
     </StateProvider>
   </React.StrictMode>,
   document.getElementById('root')
 ); 
 
//  function square(x){
//    return x*x;
// // }
// var numbers=[1,2,3,4,5,6]
//  const newArray = numbers.map((x) => x*x ); //ES6
// console.log(newArray); 


reportWebVitals();