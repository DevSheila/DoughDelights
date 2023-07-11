import React from 'react'

function ProductCarousel() {
  return (
    <>
    
       {/* Main Slider */}
      <section class="main-slider">
        <div class="slider_wave"></div>
        <div
          class="rev_slider_wrapper fullwidthbanner-container"
          id="rev_slider_one_wrapper"
          data-source="gallery"
        >
          <div
            class="rev_slider fullwidthabanner"
            id="rev_slider_one"
            data-version="5.4.1"
          >
            <ul>
              <li
                data-index="rs-16"
                data-transition="zoomout"
                data-slotamount="default"
                data-hideafterloop="0"
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="850"
                data-thumb=""
                data-delay="5999"
                data-rotate="0"
                data-saveperformance="off"
                data-title="Slide"
                data-param1=""
                data-param2=""
                data-param3=""
                data-param4=""
                data-param5=""
                data-param6=""
                data-param7=""
                data-param8=""
                data-param9=""
                data-param10=""
                data-description=""
              >
                {/* MAIN IMAGE  */}
                <img
                  src="images/main-slider/home_07_slider_03.jpg"
                  alt=""
                  title="Home Shop"
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  class="rev-slidebg"
                  data-no-retina
                />
                {/* LAYERS  */}

                {/* LAYER NR. 1  */}
                <div
                  class="tp-caption tp-shape tp-shapewrapper  tp-resizeme"
                  id="slide-16-layer-44"
                  data-x="center"
                  data-hoffset=""
                  data-y="center"
                  data-voffset="-7"
                  data-width="['full','full','full','full']"
                  data-height="['full','full','full','full']"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="on"
                  data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{'z-index': '5','background-color':'rgba(80,81,92,0.15)'}}
                ></div>

                {/* LAYER NR. 2  */}
                <div
                  class="tp-caption   tp-resizeme"
                  id="slide-16-layer-51"
                  data-x="center"
                  data-hoffset="-120"
                  data-y="center"
                  data-voffset="-97"
                  data-width="['none','none','none','none']"
                  data-height="['none','none','none','none']"
                  data-type="image"
                  data-responsive_offset="on"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{'z-index': '6'}}
                >
                  <img
                    src="images/main-slider/devider_home_07_icon.png"
                    alt=""
                    data-ww="125px"
                    data-hh="60px"
                    width="125"
                    height="60"
                    data-no-retina
                  />
                </div>

                {/* LAYER NR. 3  */}
                <div
                  class="tp-caption   tp-resizeme"
                  id="slide-16-layer-33"
                  data-x="center"
                  data-hoffset="-120"
                  data-y="center"
                  data-voffset="83"
                  data-width="['auto']"
                  data-height="['auto']"
                  data-visibility="['on','on','off','off']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{'z-index': '7', 'white-space': 'nowrap', 'font-size': '16px', 'line-height': '24px', 'font-weight': '400','color': '#ffffff', 'font-family':'ABeeZee'}}
                >
                  We offer now a great range of different
                  <br /> flavoured bite-size pastries and cakes
                </div>

                {/* LAYER NR. 4  */}
                <div
                  class="tp-caption   tp-resizeme"
                  id="slide-16-layer-31"
                  data-x="center"
                  data-hoffset="-120"
                  data-y="center"
                  data-voffset=""
                  data-width="['442']"
                  data-height="['104']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{'z-index': '8','min-width': '442px', 'max-width': '442px', 'max-width': '104px', 'max-width': '104px', 'white-space': 'normal', 'font-size': '85px', 'line-height': '85px', 'font-weight': '400', 'color': '#ffffff','font-family':'Leckerli One'}}
                >
                  Just Treats
                </div>

                {/* LAYER NR. 5  */}
                <div
                  class="tp-caption rev-btn "
                  id="slide-16-layer-49"
                  data-x="center"
                  data-hoffset="-120"
                  data-y="center"
                  data-voffset="163"
                  data-width="['auto']"
                  data-height="['auto']"
                  data-type="button"
                  data-responsive_offset="on"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(255,255,255);bg:rgb(75,67,66);"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[12,12,12,12]"
                  data-paddingright="[35,35,35,35]"
                  data-paddingbottom="[12,12,12,12]"
                  data-paddingleft="[35,35,35,35]"
                  style={{'z-index': '9', 'white-space': 'nowrap','font-size': '17px','line-height': '17px','font-weight': '500', 'color': '#4b4342', 'font-family':'Roboto','background-color':'rgba(255,255,255,0.75)','border-color':'rgb(75,67,66)','border-style':'solid','border-width':'2px 2px 2px 2px','border-radius':'30px 30px 30px 30px','outline':'none','box-shadow':'none','box-sizing':'border-box','-moz-box-sizing':'border-box','-webkit-box-sizing':'border-box','cursor':'pointer'}}
                >
                  Shop Now
                </div>
              </li>

              {/* SLIDE   */}
              <li
                data-index="rs-17"
                data-transition="zoomout"
                data-slotamount="default"
                data-hideafterloop="0"
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="850"
                data-thumb=""
                data-delay="5999"
                data-rotate="0"
                data-saveperformance="off"
                data-title="Slide"
                data-param1=""
                data-param2=""
                data-param3=""
                data-param4=""
                data-param5=""
                data-param6=""
                data-param7=""
                data-param8=""
                data-param9=""
                data-param10=""
                data-description=""
              >
                {/* MAIN IMAGE  */}
                <img
                  src="images/main-slider/home_07_slider_02.jpg"
                  alt=""
                  title="Home Shop"
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  class="rev-slidebg"
                  data-no-retina
                />
                {/* LAYERS  */}

                {/* LAYER NR. 6  */}
                <div
                  class="tp-caption tp-shape tp-shapewrapper  tp-resizeme"
                  id="slide-17-layer-44"
                  data-x="center"
                  data-hoffset=""
                  data-y="center"
                  data-voffset="-7"
                  data-width="['full','full','full','full']"
                  data-height="['full','full','full','full']"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="on"
                  data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{'z-index': '5','background-color':'rgba(80,81,92,0.15)'}}
                ></div>

                {/* LAYER NR. 7  */}
                <div
                  class="tp-caption   tp-resizeme"
                  id="slide-17-layer-51"
                  data-x="center"
                  data-hoffset=""
                  data-y="center"
                  data-voffset="-97"
                  data-width="['none','none','none','none']"
                  data-height="['none','none','none','none']"
                  data-type="image"
                  data-responsive_offset="on"
                  data-frames='[{"delay":500,"speed":1010,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{'z-index': '6'}}
                >
                  <img
                    src="images/main-slider/devider_home_07_icon.png"
                    alt=""
                    data-ww="125px"
                    data-hh="60px"
                    width="125"
                    height="60"
                    data-no-retina
                  />
                </div>

                {/* LAYER NR. 8  */}
                <div
                  class="tp-caption   tp-resizeme"
                  id="slide-17-layer-33"
                  data-x="center"
                  data-hoffset="1"
                  data-y="center"
                  data-voffset="82"
                  data-width="['auto']"
                  data-height="['auto']"
                  data-visibility="['on','on','off','off']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{'z-index': '7', 'white-space': 'nowrap', 'font-size': '16px', 'line-height': '24px', 'font-weight': '400','color': '#ffffff', 'font-family':'ABeeZee'}}
                >
                  We offer now a great range of different
                  <br /> flavoured bite-size pastries and cakes
                </div>

                {/* LAYER NR. 9  */}
                <div
                  class="tp-caption   tp-resizeme"
                  id="slide-17-layer-31"
                  data-x="center"
                  data-hoffset=""
                  data-y="center"
                  data-voffset=""
                  data-width="['442']"
                  data-height="['104']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{'z-index': '8','min-width': '442px', 'max-width': '442px', 'max-width': '104px', 'max-width': '104px', 'white-space': 'normal', 'font-size': '85px', 'line-height': '85px', 'font-weight': '400', 'color': '#ffffff','font-family':'Leckerli One'}}
                >
                  Just Treats
                </div>

                {/* LAYER NR. 10  */}
                <div
                  class="tp-caption rev-btn "
                  id="slide-17-layer-49"
                  data-x="center"
                  data-hoffset="-1"
                  data-y="center"
                  data-voffset="163"
                  data-width="['auto']"
                  data-height="['auto']"
                  data-type="button"
                  data-responsive_offset="on"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(255,255,255);bg:rgb(75,67,66);"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[12,12,12,12]"
                  data-paddingright="[35,35,35,35]"
                  data-paddingbottom="[12,12,12,12]"
                  data-paddingleft="[35,35,35,35]"
                  style={{'z-index': '9', 'white-space': 'nowrap','font-size': '17px','line-height': '17px','font-weight': '500', 'color': '#4b4342', 'font-family':'Roboto','background-color':'rgba(255,255,255,0.75)','border-color':'rgb(75,67,66)','border-style':'solid','border-width':'2px 2px 2px 2px','border-radius':'30px 30px 30px 30px','outline':'none','box-shadow':'none','box-sizing':'border-box','-moz-box-sizing':'border-box','-webkit-box-sizing':'border-box','cursor':'pointer'}}
                >
                  Shop Now
                </div>
              </li>

              {/* SLIDE   */}
              <li
                data-index="rs-18"
                data-transition="zoomout"
                data-slotamount="default"
                data-hideafterloop="0"
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="850"
                data-thumb=""
                data-delay="5999"
                data-rotate="0"
                data-saveperformance="off"
                data-title="Slide"
                data-param1=""
                data-param2=""
                data-param3=""
                data-param4=""
                data-param5=""
                data-param6=""
                data-param7=""
                data-param8=""
                data-param9=""
                data-param10=""
                data-description=""
              >
                {/* MAIN IMAGE  */}
                <img
                  src="images/main-slider/home_07_slider_01.jpg"
                  alt=""
                  title="Home Shop"
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  class="rev-slidebg"
                  data-no-retina
                />
                {/* LAYERS  */}

                {/* LAYER NR. 11  */}
                <div
                  class="tp-caption tp-shape tp-shapewrapper  tp-resizeme"
                  id="slide-18-layer-44"
                  data-x="center"
                  data-hoffset=""
                  data-y="center"
                  data-voffset="-7"
                  data-width="['full','full','full','full']"
                  data-height="['full','full','full','full']"
                  data-type="shape"
                  data-basealign="slide"
                  data-responsive_offset="on"
                  data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{'z-index': '5','background-color':'rgba(80,81,92,0.15)'}}
                ></div>

                {/* LAYER NR. 12  */}
                <div
                  class="tp-caption   tp-resizeme"
                  id="slide-18-layer-51"
                  data-x="center"
                  data-hoffset=""
                  data-y="center"
                  data-voffset="-97"
                  data-width="['none','none','none','none']"
                  data-height="['none','none','none','none']"
                  data-type="image"
                  data-responsive_offset="on"
                  data-frames='[{"delay":500,"speed":1010,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{'z-index': '6'}}
                >
                  <img
                    src="images/main-slider/devider_home_07_icon.png"
                    alt=""
                    data-ww="125px"
                    data-hh="60px"
                    width="125"
                    height="60"
                    data-no-retina
                  />
                </div>

                {/* LAYER NR. 13  */}
                <div
                  class="tp-caption   tp-resizeme"
                  id="slide-18-layer-33"
                  data-x="center"
                  data-hoffset=""
                  data-y="center"
                  data-voffset="82"
                  data-width="['auto']"
                  data-height="['auto']"
                  data-visibility="['on','on','off','off']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{'z-index': '7', 'white-space': 'nowrap', 'font-size': '16px', 'line-height': '24px', 'font-weight': '400','color': '#ffffff', 'font-family':'ABeeZee'}}
                >
                  We offer now a great range of different
                  <br /> flavoured bite-size pastries and cakes
                </div>

                {/* LAYER NR. 14  */}
                <div
                  class="tp-caption   tp-resizeme"
                  id="slide-18-layer-31"
                  data-x="center"
                  data-hoffset=""
                  data-y="center"
                  data-voffset=""
                  data-width="['442']"
                  data-height="['104']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{'z-index': '8','min-width': '442px', 'max-width': '442px', 'max-width': '104px', 'max-width': '104px', 'white-space': 'normal', 'font-size': '85px', 'line-height': '85px', 'font-weight': '400', 'color': '#ffffff','font-family':'Leckerli One'}}
                >
                  Just Treats
                </div>

                {/* LAYER NR. 15  */}
                <div
                  class="tp-caption rev-btn "
                  id="slide-18-layer-49"
                  data-x="center"
                  data-hoffset="-1"
                  data-y="center"
                  data-voffset="163"
                  data-width="['auto']"
                  data-height="['auto']"
                  data-type="button"
                  data-responsive_offset="on"
                  data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(255,255,255);bg:rgb(75,67,66);"}]'
                  data-textAlign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[12,12,12,12]"
                  data-paddingright="[35,35,35,35]"
                  data-paddingbottom="[12,12,12,12]"
                  data-paddingleft="[35,35,35,35]"
                  style={{'z-index': '9', 'white-space': 'nowrap','font-size': '17px','line-height': '17px','font-weight': '500', 'color': '#4b4342', 'font-family':'Roboto','background-color':'rgba(255,255,255,0.75)','border-color':'rgb(75,67,66)','border-style':'solid','border-width':'2px 2px 2px 2px','border-radius':'30px 30px 30px 30px','outline':'none','box-shadow':'none','box-sizing':'border-box','-moz-box-sizing':'border-box','-webkit-box-sizing':'border-box','cursor':'pointer'}}
                >
                  Shop Now
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* End Main Slider */}
    </>
  );
}

export default ProductCarousel