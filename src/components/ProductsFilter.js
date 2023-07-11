import React from 'react'

function ProductsFilter() {
  return (
        <div class="shop-upper-box clearfix">
                <div class="items-label">Showing all 12 results</div>
                <div class="orderby">
                  <select
                    name="orderby"
                    class="sortby-select select2-offscreen"
                  >
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by newness</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                </div>
              </div>
  )
}

export default ProductsFilter