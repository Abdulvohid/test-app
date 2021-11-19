import React, { Component } from "react";
import Slider from "react-slick";
import SlidePhoto from "../../../asserts/img/images/hero_bg.png";

export default class AdaptiveHeight extends Component {
  render() {
    var settings = {
      className: "",
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    };
    return (
      <div>
        <div className="slide__item">
          <Slider {...settings}>
            <div>
              <img className="slide__img" src={SlidePhoto} alt="" />{" "}
              <h3 className="slide__text">CEO... - Founder city</h3>
            </div>
            <div>
              <img className="slide__img" src={SlidePhoto} alt="" />{" "}
              <h3 className="slide__text">CEO... - Founder city</h3>
            </div>
            <div>
              <img className="slide__img" src={SlidePhoto} alt="" />
              <h3 className="slide__text">CEO... - Founder city</h3>
            </div>
            <div>
              <img className="slide__img" src={SlidePhoto} alt="" />
              <h3 className="slide__text">CEO... - Founder city</h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
