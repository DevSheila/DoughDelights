import React from 'react'

function SearchWidget() {
  return (
    //   <!-- Search Widget -->
    <div class="sidebar-widget search-widget">
        <form method="post" action="contact.html">
            <div class="form-group">
                <input type="search" name="search-field" value="" placeholder="Search products…" required />
                <button type="submit"><span class="icon fa fa-search"></span></button>
            </div>
        </form>
    </div>
  )
}

export default SearchWidget