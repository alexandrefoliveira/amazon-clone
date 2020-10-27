import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

function App() {

  const promise = loadStripe("pk_test_51HfCNqL2Pqwa8uX1cNysiQptcY5rvmiEd6lCuA1sObU7Mo7POin0jIavz4z9qX2ca3SbNlbiuKHlYbmk6zR5AQ2v00pFCj8ynE")

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // User logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // User logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    < Router >
      <div className="app">
        <Switch>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>

      </div>

    </Router >
  );
}

export default App;