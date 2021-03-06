import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import style from './style.module.scss'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.border}></div>
      <div className={style.footer_submenu}>
        <div className={style.submenu_social}>
          <a href="https://www.linkedin.com/in/cristian-viterales" target="_blank"  aria-label="LinkedIn" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a >
          <a href="https://github.com/cviterales" target="_blank"  aria-label="GitHub" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="mailto: cviterales@gmail.com" target="_blank"  aria-label="Gmail" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
