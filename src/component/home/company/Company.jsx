import "./Company.scss";
import CompanyImg from "../../../asserts/img/images/companyImg.png";

const Company = () => {
  return (
    <div className="company__wrap">
      <div className="container">
        <div className="company__content">
          <div className="company__img">
            <img src={CompanyImg} alt="" />
          </div>
          <div className="company__info">
            <h3 className="company__title">Đăng ký dùng thử ngay hôm nay</h3>
            <p className="company__disc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              nulla risus pellentesque egestas. Netus elementum erat posuere
              arcu. Augue nam consectetur turpis lobortis porta eget ipsum in.
            </p>
            <button className="company__btn">Dùng thử miễn phí</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
