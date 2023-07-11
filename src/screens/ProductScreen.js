import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Message from "../components/Message";
import MiniLoader from "../components/MiniLoader";
import {
  listProductDetails,
  createProductReview,
} from "../redux/actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../redux/constants/productConstants";
import ProductsSideBar from "../components/ProductsSideBar";


const ProductScreen = ({ history, match }) => {

    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const productReviewCreate = useSelector(
      (state) => state.productReviewCreate
    );
    const {
      success: successProductReview,
      loading: loadingProductReview,
      error: errorProductReview,
    } = productReviewCreate;

    useEffect(() => {
      if (successProductReview) {
        setRating(0);
        setComment("");
      }
      if (!product._id || product._id !== match.params.id) {
        dispatch(listProductDetails(match.params.id));
        dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
      }
    }, [dispatch, match, successProductReview]);

    const addToCartHandler = () => {
      history.push(`/cart-${match.params.id}?qty=${qty}`);
    };

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(
        createProductReview(match.params.id, {
          rating,
          comment,
        })
      );
    };

  return (
    <>
      <div class="sidebar-page-container">
        <div class="auto-container">
          <div class="row clearfix">

            {/* <!--Content Side--> */}
            <div class="content-side col-lg-9 col-md-12 col-sm-12">
              <div class="shop-single">
                {/* <!-- Product Detail --> */}
                <div class="product-details">
                  {/* <!--Basic Details--> */}
                  <div class="basic-details">
                    <div class="row clearfix">
                      <div class="image-column col-md-6 col-sm-12">
                        <figure class="image">
                          <a
                            href={product.image}
                            class="lightbox-image"
                            title="Image Caption Here"
                          >
                           
                          </a>
                        </figure>
                      </div>
                      <div class="info-column col-md-6 col-sm-12">
                        <div class="details-header">
                          <h4>{product.name}</h4>
                          <div class="rating">
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                          </div>
                          <a class="reviews" href="shop-single.html#">
                            ({product.numReviews} Customer Reviews)
                          </a>
                          <div class="item-price">{product.price}</div>
                          <div class="text">{product.description}</div>
                        </div>

                        <div class="other-options clearfix">
                          <div class="item-quantity">
                            Quantity{" "}
                            {/* <input
                        class="qty"
                        type="number"
                        value="1"
                        name="quantity"
                      /> */}
                            {product.countInStock > 0 && (
                              <ListGroup.Item>
                                <Row>
                                  <Col>Qty</Col>
                                  <Col>
                                    <Form.Control
                                      as="select"
                                      value={qty}
                                      onChange={(e) => setQty(e.target.value)}
                                    >
                                      {[
                                        ...Array(product.countInStock).keys(),
                                      ].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                          {x + 1}
                                        </option>
                                      ))}
                                    </Form.Control>
                                  </Col>
                                </Row>
                              </ListGroup.Item>
                            )}
                          </div>
                          <button onClick={addToCartHandler} type="button" class="theme-btn add-to-cart" disabled={product.countInStock === 0}>
                            <span class="btn-title">Add To Cart</span>
                          </button>
                          <ul class="product-meta">
                            <li class="posted_in">
                              Category: <a href="shop-single.html#">Cake</a>
                            </li>
                            <li class="tagged_as">
                              Tag: <a href="shop-single.html#">Nuts</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--Basic Details--> */}

                  {/* <!--Product Info Tabs--> */}
                  <div class="product-info-tabs">
                    {/* <!--Product Tabs--> */}
                    <div class="prod-tabs tabs-box">
                      {/* <!--Tab Btns--> */}
                      <ul class="tab-btns tab-buttons clearfix">
                    
                        <li data-tab="#prod-reviews" class="tab-btn active-btn">
                          Review ({product.numReviews} )
                        </li>
                      </ul>

                      {/* <!--Tabs Container--> */}
                      <div class="tabs-content">
                        {/* <!--Tab--> */}
                        <div class="tab" id="prod-details">
                          <h2 class="title">Descripton</h2>
                          <div class="content">
                            <p> {product.description} </p>
                          </div>
                        </div>

                        {/* <!--Tab--> */}
                        <div class="tab active-tab" id="prod-reviews">
                          <h2 class="title">
                            {product.numReviews} reviews for {product.name}
                          </h2>
                          {/* <!--Reviews Container--> */}
                          <div class="comments-area">
                            {/* <!--Comment Box--> */}
                            <div class="comment-box">
                              {product.reviews.length === 0 && (
                                <Message>No Reviews</Message>
                              )}

                              {product.reviews.map((review) => (
                                <div class="comment">
                                  <div class="author-thumb">
                                    <img
                                      src="images/resource/avatar-2.png"
                                      alt=""
                                    />
                                  </div>
                                  <div class="comment-inner">
                                    <div class="comment-info clearfix">
                                      <strong class="name">
                                        {review.name}
                                      </strong>
                                      <span class="date">
                                        – {review.createdAt.substring(0, 10)}
                                      </span>
                                    </div>
                                    <Rating value={review.rating} />
                                    <div class="text">{review.comment}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* <!--Comment Form--> */}
                          <div class="comment-form">
                            {userInfo ? (
                              <>
                                <div class="sub-title">Add a review</div>
                                <div class="form-outer">
                                  <p>
                                    Your email address will not be published.
                                    Required fields are marked *
                                  </p>
                                  <div class="rating-box">
                                    <div class="field-label">Your Rating</div>
                                    <div class="rating">
                                      <a href="shop-single.html#">
                                        <span class="fa fa-star"></span>
                                      </a>
                                      <a href="shop-single.html#">
                                        <span class="fa fa-star"></span>
                                      </a>
                                      <a href="shop-single.html#">
                                        <span class="fa fa-star"></span>
                                      </a>
                                      <a href="shop-single.html#">
                                        <span class="fa fa-star"></span>
                                      </a>
                                      <a href="shop-single.html#">
                                        <span class="fa fa-star"></span>
                                      </a>
                                    </div>
                                  </div>
                                  <form
                                    method="post"
                                    action="blog-showcase.html"
                                  >
                                    <div class="row clearfix">
                                      <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <div class="field-label">
                                          Your review *
                                        </div>
                                        <textarea
                                          name="message"
                                          placeholder=""
                                        ></textarea>
                                      </div>

                                      <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                                        <div class="field-label">Name *</div>
                                        <input
                                          type="text"
                                          name="username"
                                          placeholder=""
                                          required=""
                                        />
                                      </div>

                                      <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                                        <div class="field-label">Email *</div>
                                        <input
                                          type="email"
                                          name="email"
                                          placeholder=""
                                          required=""
                                        />
                                      </div>

                                      <div class="col-lg-12 col-md-12 col-sm-12 form-group text-right">
                                        <input
                                          type="submit"
                                          name="submit"
                                          value="Submit"
                                        />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </>
                            ) : (
                              <Message>
                                Please <Link to="/login">sign in</Link> to write
                                a review{" "}
                              </Message>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--End Product Info Tabs--> */}
                </div>
                {/* <!-- Product Detail --> */}
              </div>
              {/* <!-- End Shop Single --> */}
            </div>

            <ProductsSideBar/>

          </div>
        </div>
      </div>
    </>
  );
};
export default ProductScreen;