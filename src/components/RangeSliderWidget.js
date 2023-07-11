import React from 'react'

function RangeSliderWidget() {
  return (
        //   <!-- Range Slider Widget -->
        <div class="sidebar-widget rangeslider-widget">
            <div class="widget-content">
                <h3 class="widget-title">Price Filter</h3>
                
                <div class="range-slider-one clearfix">
                    <div class="price-range-slider"></div>
                    <div class="clearfix">
                        <div class="pull-left input-box">
                            <div class="title">Price:</div>
                            <div class="input"><input type="text" class="property-amount" name="field-name" readonly/></div>
                        </div>
                        <div class="pull-right btn-box">
                            <a href="shop.html#" class="theme-btn"><span class="btn-title">Filtter</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default RangeSliderWidget