import { Link } from "react-scroll";
import React from "react";
import "./footer.css";
import logoLight from "../../Assets/logoLight.png";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src={logoLight} alt="LogoIpond" />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="about"
                className="text-md"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="documentation"
                className="text-md"
              >
                Dokumentasi
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Dibuat oleh Tim My I-Pond</p>
      </div>
    </footer>
  );
}

export default Footer;
