import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./style.scss";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__border footer__submenu_social">
        <a
          href="https://www.linkedin.com/in/cristian-viterales"
          target="_blank"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://github.com/cviterales"
          target="_blank"
          aria-label="GitHub"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href="mailto: cviterales@gmail.com"
          target="_blank"
          aria-label="Gmail"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          aria-label="The Movie DB"
          rel="noopener noreferrer"
        >
          <img style={{ width: "25px" }} src="./tmdb.svg"  alt="movies service"/>
        </a>
        <img className="footer__img" src="./logo192.png" alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
