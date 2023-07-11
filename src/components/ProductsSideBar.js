import React from 'react'
import SearchWidget from "./SearchWidget";
import CartWidget from "./CartWidget";
import RangeSliderWidget from "./RangeSliderWidget";
import TagsWidget from "./TagsWidget";

function ProductsSideBar() {
  return (
    //    <!--Sidebar Side-->
    <div class="sidebar-side sticky-container col-lg-3 col-md-12 col-sm-12">
      <aside class="sidebar theiaStickySidebar">
        <div class="sticky-sidebar">
            <SearchWidget/>
            <CartWidget/>
            <RangeSliderWidget/>
            <TagsWidget/>
        </div>
      </aside>
    </div>
  );
}

export default ProductsSideBar