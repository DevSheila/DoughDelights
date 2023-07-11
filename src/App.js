import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import NavBar from "./components/NavBar";
import Cart from "./screens/Cart";
import ProductScreen from "./screens/ProductScreen";
import OrderScreen from "./screens/OrderScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";


function App() {
  return (
    <Router>
      <NavBar />
      <main className="py-3">
        <Route path="/" component={HomeScreen} exact />
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route path="/page/:pageNumber" component={HomeScreen} exact />
        <Route
          path="/search/:keyword/page/:pageNumber"
          component={HomeScreen}
          exact
        />
        <Route path="/cart-:id?" component={Cart} exact />
        <Route path="/product-:id" component={ProductScreen} exact />
        {/* <Route path="/cart" component={CartScreen} exact /> */}

        <Route path="/order-:id" component={OrderScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
      </main>
    </Router>
  );
}
export default App;