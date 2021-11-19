import "./Hero.scss";
import AdaptiveHeight from "./HeroSlider";

const Blog = () => {
  const hero = [
    {
      title: "Trải nghiệm khách hàng 5 sao cùng với Nobita",
    },
    {
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, acpurus sed morbi vel ipsum, nunc in eu. Ac felis nisl volutpat nunc  in sit. Amet suspendisse in amet, et, sagittis, nulla consequat   elementum maecenas. Purus lorem morbi pharetra, nibh. Ornare dui   venenatis, convallis imperdiet. Commodo ut lectus mattis mi  fringilla magnis ac vulputate. Sit urna volutpat quis vestibulum   arcu sit. Morbi a, id massa dignissim et interdum. Massa tellus    etiam cursus diam orci odio mi",
    },
  ];
  return (
    <div className="hero__wrap">
      <div className="container">
        <div className="hero_content">
          <div className="hero__title">
            {hero.map((item) => (
              <>
                <h3 className="hero__text">{item.title}</h3>
                <p className="hero__disc">{item.disc}</p>
              </>
            ))}
            <button className="hero__btn">Lorem ipsum dolor sit amet.</button>
          </div>
          <AdaptiveHeight />
        </div>
      </div>
    </div>
  );
};

export default Blog;
