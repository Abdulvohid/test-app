import "./Language.scss";
import MapIcon from "../../asserts/img/icon/iconmap.png";
import Pretiv from "../../asserts/img/icon/prev.png";
import Profil from "../../asserts/img/icon/profile.png";
import { useState } from "react";

const Language = () => {
  const [language, setLanguage] = useState("Eng");

  return (
    <div className="lang__text">
      <div className="container">
        <div className="lang__hero">
          <div className="lang__wrap">
            <img className="lang__img" src={MapIcon} alt="" />
            <ul className="lang__text">
              {language}
              <div className="lang__item">
                <li onClick={() => setLanguage("Eng")}>Eng</li>
                <li onClick={() => setLanguage("Rus")}>Rus</li>
                <li onClick={() => setLanguage("Uzb")}>Uzb</li>
              </div>
            </ul>
            <img className="lang__img__prev" src={Pretiv} alt="" />
          </div>
          <div className="lang__profil">
            <img className="profile__img" src={Profil} alt="" />
            <h3 className="lang__text">Registration</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
