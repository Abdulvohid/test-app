import "./navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import Logo from "../../asserts/img/images/Logo.png";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const links = [
    {
      to: "",
      title: "Home",
    },

    {
      to: "about",
      title: "About",
    },

    {
      to: "contact",
      title: "Contact",
    },
    {
      to: "skills",
      title: "Skills",
    },
    {
      to: "signUp",
      title: "Sign up",
    },
  ];

  return (
    <div className="navbar_content">
      <div className="container">
        <div className="nav_content">
          <div className="nav-logo">
            <img src={Logo} alt="" />{" "}
          </div>
          <ul className="nav-links" style={{ top: isMobile ? 0 : "-100%" }}>
            {links.map((link) => (
              <Link
                onClick={() => setIsMobile(!isMobile)}
                to={"/" + link.to}
                className="nav__link__text"
              >
                <li className="nav_link">{link.title}</li>
              </Link>
            ))}
          </ul>
          <button className="nav__btn">Dùng thử miễn phí</button>

          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {!isMobile ? (
              <GiHamburgerMenu className="hamburger__btn" />
            ) : (
              <AiFillCloseCircle />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
