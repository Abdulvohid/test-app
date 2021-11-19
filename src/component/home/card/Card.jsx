import "./Card.scss";
import CardImg from "../../../asserts/img/images/logo_ladi.png";
import Arrov from "../../../asserts/img/icon/Arrow.png";

const Card = () => {
  const CardItem = [
    {
      Img: CardImg,
      Text: "Ladipage",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit eget...",
    },

    {
      Img: CardImg,
      Text: "Ladipage",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit eget...",
    },

    {
      Img: CardImg,
      Text: "Ladipage",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit eget...",
    },

    {
      Img: CardImg,
      Text: "Ladipage",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit eget...",
    },

    {
      Img: CardImg,
      Text: "Ladipage",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit eget...",
    },

    {
      Img: CardImg,
      Text: "Ladipage",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit eget...",
    },

  
  ];

  return (
    <div className="card__wrap">
      <div className="container">
        <div className="card__content">
          {CardItem.map((item) => {
            return (
              <div className="card__item">
                <>
                  <img className="card__img" src={item.Img} alt="" />
                  <h3 className="card__text">{item.Text}</h3>
                  <p className="card__disc">{item.disc}</p>
                  <button className="card__btn">
                    Đọc tiếp{" "}
                    <img className="card__btn__img" src={Arrov} alt="" />
                  </button>
                </>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
