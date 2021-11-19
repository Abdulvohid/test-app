import "./Footer.scss";
import FooterImg from "../../asserts/img/images/footer_logo.png";

const Footer = () => {
  return (
    <div className="footer__wrap">
      <div className="container">
        <div className="footer__content">
          <div className="footer__item">
            <h2 className="footer__text">Liên hệ</h2>
            <h3 className="footer__title">Công ty Cổ Phần công nghệ ECRM.VN</h3>
            <h4 className="footer__disc">
              Văn phòng:
              <span className="footer__span">
                33 Nguyễn Trãi, P. Khương Trung Q. Thanh Xuân, Tp Hà Nội
              </span>
            </h4>
            <h4 className="footer__disc">
              Hotline: <span className="footer__span">0932.343.678</span>{" "}
            </h4>
            <h4 className="footer__disc">
              Email: <span className="footer__span">Cskh@nobita.pro</span>{" "}
            </h4>
            <h4 className="footer__disc">
              MST: <span className="footer__span">0109081825</span>{" "}
            </h4>
            <h4 className="footer__disc">
              Ngày cấp: <span className="footer__span">10/02/2020</span>{" "}
            </h4>
            <h4 className="footer__disc">
              Nơi cấp:{" "}
              <span className="footer__span">
                Sở kế hoạch và đầu tư TP Hà Nội
              </span>{" "}
            </h4>

            <img className="footer__img" src={FooterImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
