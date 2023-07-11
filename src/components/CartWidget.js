import React from 'react'

function CartWidget() {
  return (
    //  <!-- Cart Widget -->
    <div class="sidebar-widget cart-widget">
      <div class="widget-content">
        <h3 class="widget-title">Cart</h3>

        <div class="shopping-cart">
          <ul class="shopping-cart-items">
            <li class="cart-item">
              <img
                src="images/resource/products/prod-thumb-1.jpg"
                alt="#"
                class="thumb"
              />
              <span class="item-name">Birthday Cake</span>
              <span class="item-quantity">
                1 x <span class="item-amount">$84.00</span>
              </span>
              <a href="shop-single.html" class="product-detail">
                DETAILS
              </a>
              <button class="remove-item">
                <span class="fa fa-times"></span>
              </button>
            </li>

            <li class="cart-item">
              <img
                src="images/resource/products/prod-thumb-2.jpg"
                alt="#"
                class="thumb"
              />
              <span class="item-name">French Macaroon</span>
              <span class="item-quantity">
                1 x <span class="item-amount">$13.00</span>
              </span>
              <a href="shop-single.html" class="product-detail">
                DETAILS
              </a>
              <button class="remove-item">
                <span class="fa fa-times"></span>
              </button>
            </li>
          </ul>

          <div class="cart-footer">
            <div class="shopping-cart-total">
              <strong>Subtotal:</strong> $97.00
            </div>
            <a
              href="http://html.cwsthemes.com/bellaria/cart.html"
              class="theme-btn"
            >
              View Cart
            </a>
            <a href="checkout.html" class="theme-btn">
              Checkout
            </a>
          </div>
        </div>
        {/* <!--end shopping-cart --> */}
      </div>
    </div>
  );
}

export default CartWidget