import React from 'react'
import Rating from './Rating';

function ProductItem({ product }) {
  return (
    <>
      <div class="shop-item col-lg-4 col-md-6 col-sm-12">
        <div class="inner-box">
          <div class="image-box">
            <figure class="image">
              <a href={`/product-${product._id}`}>
                <img src={product.image} alt="" />
              </a>
            </figure>
            <div class="btn-box">
              <a href="/shopping-cart">Add to cart</a>
            </div>
          </div>
          <div class="lower-content">
            <h4 class="name">
              <a href={`/product-${product._id}`}>{product.name}</a>
            </h4>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <div class="price">${product.price}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;