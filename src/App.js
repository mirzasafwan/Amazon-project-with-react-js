import React,{useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from"./Checkout"
import Payment from "./payment"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const promise=loadStripe('pk_test_51KIbZsSGA3ktS6ug5dLW1bOpJ4S2KetcCPkKZZdsfpRgyJjT3QRS6N0UVcygAML3hIfSsFMNw43TblrDDDkSTaTZ0064i1HtLT')
function App() {
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
    //will only run once when app component is loaded
    auth.onAuthStateChanged(authUser=>{
      console.log('the user is authorized');
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
    <Router> 
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
            </Route>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
