import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Product from "./components/product/ProductDisplay";
import Home from "./components/home/Home";
import Order from "./components/order/Order";
import ProductDisplay from "./components/product/ProductDisplay"
import ProductInfo from "./components/product/Product";

import Checkout from './components/checkout/Checkout';
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/order">
            <Navbar />
            <Order />
          </Route>
          <Route exact path="/products">
            <Navbar />
            <ProductDisplay />
          </Route>
          <Route exact path="/checkout">
            <Navbar />
            <Checkout />
          </Route>
          
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
