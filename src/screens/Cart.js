import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

function Cart({ match, location, history }) {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <Message>
          Your cart is empty <Link to="/">Go Back</Link>
        </Message>
      ) : (
        <>
          {/* <!--Cart Section--> */}
          <section class="cart-section">
            <div class="container">
              <div class="row justify-content-between">
                <div class=" col-9 ">
                  {/* <!--Cart Outer--> */}
                  <div class="cart-outer">
                    <div class="table-outer">
                      <table class="cart-table">
                        <thead class="cart-header">
                          <tr>
                            <th class="product-thumbnail">&nbsp;</th>
                            <th class="product-name">Product</th>
                            <th class="product-price">Price</th>
                            <th class="product-quantity">Quantity</th>
                            <th class="product-subtotal">Total</th>
                            <th class="product-remove">&nbsp;</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item) => (
                            <tr class="cart-item">
                              <td class="product-thumbnail">
                                <a href="shop-single.html">
                                  <img src={item.image} alt="" />
                                </a>
                              </td>
                              <td class="product-name">
                                <a href="shop-single.html">{item.name}</a>
                              </td>
                              <td class="product-price">${item.price}</td>
                              <td class="product-quantity">
                                <div class="quantity">
                                  <label>Quantity</label>
                                  {/* <input
                                type="number"
                                class="qty"
                                name="qty"
                                value="1"
                              /> */}
                                  <Form.Control
                                    as="select"
                                    value={item.qty}
                                    onChange={(e) =>
                                      dispatch(
                                        addToCart(
                                          item.product,
                                          Number(e.target.value)
                                        )
                                      )
                                    }
                                  >
                                    {[...Array(item.countInStock).keys()].map(
                                      (x) => (
                                        <option key={x + 1} value={x + 1}>
                                          {x + 1}
                                        </option>
                                      )
                                    )}
                                  </Form.Control>{" "}
                                </div>
                              </td>
                              <td class="product-subtotal">
                                <span class="amount">
                                  {" "}
                                  ${(item.qty * item.price).toFixed(2)}
                                </span>
                              </td>
                              <td class="product-remove">
                                {" "}
                                <button
                                  type="button"
                                  // href="shopping-cart.html#"
                                  onClick={() =>
                                    removeFromCartHandler(item.product)
                                  }
                                  class="remove"
                                >
                                  <span class="fa fa-times"></span>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div class="cart-options clearfix">
                      <div class="pull-left">
                        <div class="apply-coupon clearfix">
                          <div class="form-group clearfix">
                            <input
                              type="text"
                              name="coupon-code"
                              value=""
                              placeholder="Coupon Code"
                            />
                          </div>
                          <div class="form-group clearfix">
                            <button type="button" class="theme-btn coupon-btn">
                              Apply Coupon
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class=" col-3">
                  {/* <!--Totals Table--> */}
                  <ul class="totals-table">
                    <li>
                      <h3>Cart Totals</h3>
                    </li>
                    <li class="clearfix">
                      <span class="col">Subtotal</span>
                      <span class="col price">
                        {" "}
                        $
                        {cartItems
                          .reduce((acc, item) => acc + item.qty * item.price, 0)
                          .toFixed(2)}
                      </span>
                    </li>
                    <li class="clearfix">
                      <span class="col">Total</span>
                      <span class="col total-price">
                        {" "}
                        $
                        {cartItems
                          .reduce((acc, item) => acc + item.qty * item.price, 0)
                          .toFixed(2)}
                      </span>
                    </li>
                    <li class="text-right">
                      <button
                        type="submit"
                        class="theme-btn proceed-btn"
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                      >
                        Proceed to Checkout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* <!--End Cart Section--> */}
        </>
      )}
    </>
  );
}

export default Cart;
