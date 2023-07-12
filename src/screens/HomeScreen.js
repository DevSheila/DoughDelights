import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";

import Paginate from "../components/Paginate";
import Message from "../components/Message";
// import ProductsFilter from "../components/ProductsFilter";
import ProductCarousel from "../components/ProductCarousel";
import ProductItem from "../components/ProductItem";
import ProductsSideBar from "../components/ProductsSideBar";
import MiniLoader from "../components/MiniLoader";

function HomeScreen({ match }) {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <ProductCarousel />

      <div class="sidebar-page-container">
        <div class="auto-container">
          <div class="row clearfix">
            {/* <!--Content Side--> */}
            <div class="content-side col-lg-9 col-md-12 col-sm-12">
              <div class="our-shop">
                <div class="row clearfix">
                  {/* <ProductsFilter /> */}

                  {loading ? (
                    <MiniLoader />
                  ) : error ? (
                    <Message variant="danger">{error}</Message>
                  ) : (
                    <>
                      {products &&
                        products.map((product) => (
                          <ProductItem key={product._id} product={product} />
                        ))}
                    </>
                  )}

                  <Paginate
                    pages={pages}
                    page={page}
                    keyword={keyword ? keyword : ""}
                  />
                </div>
              </div>
            </div>

            <ProductsSideBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
