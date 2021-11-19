import "./reklama.scss";
import React, { Component } from "react";
import Slider from "react-slick";
import Adidas from "../../../asserts/img/images/adidas.png";
import SunHouse from "../../../asserts/img/images/sunhouse.png";
import Alpha from "../../../asserts/img/images/alpha.png";
import Crazyteen from "../../../asserts/img/images/crazyteen.png";
import Kangaroo from "../../../asserts/img/images/kangaroo.png";
import Ladipage from "../../../asserts/img/images/ladipage.png";
import Saffron from "../../../asserts/img/images/saffron.png";
import Simple from "../../../asserts/img/images/simple.png";

export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      autoplay: true,
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      loop: true,
      dots: true,
      //   slidesPerRow: 2,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={Adidas} alt="Adidas" />{" "}
          </div>
          <div>
            <img className="reclam_img" src={SunHouse} alt="SunHouse" />{" "}
          </div>
          <div>
            <img className="reclam_img" src={Alpha} alt="Alpha" />{" "}
          </div>
          <div>
            <img className="reclam_img" src={Crazyteen} alt="Crazyteen" />{" "}
          </div>
          <div>
            <img className="reclam_img" src={Ladipage} alt="SunHouse" />{" "}
          </div>
          <div>
            <img className="reclam_img" src={Saffron} alt="SunHouse" />{" "}
          </div>
          <div>
            <img className="reclam_img" src={Simple} alt="SunHouse" />{" "}
          </div>
          <div>
            <img className="reclam_img" src={Kangaroo} alt="SunHouse" />{" "}
          </div>
          <div>
            <img className="reclam_img" src={Adidas} alt="Adidas" />{" "}
          </div>
          <div>
            <img className="reclam_img" src={SunHouse} alt="SunHouse" />{" "}
          </div>
          <div>
            <img className="reclam_img" src={Alpha} alt="Alpha" />{" "}
          </div>

          <div>
            <img className="reclam_img" src={Crazyteen} alt="Crazyteen" />{" "}
          </div>
          <div>
            <img className="reclam_img" src={Ladipage} alt="SunHouse" />{" "}
          </div>
          <div>
            <img className="reclam_img" src={Saffron} alt="SunHouse" />{" "}
          </div>
        </Slider>
      </div>
    );
  }
}
