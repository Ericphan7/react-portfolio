import React from "react";


import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ericphan7@outlook.com">ericphan7@outlook.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkin icon"
          />
          <a href="https://www.linkedin.com/in/eric-dat-phan-2b596a160/">
            https://www.linkedin.com/in/eric-dat-phan-2b596a160/
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Ericphan7">
            https://github.com/Ericphan7
          </a>
        </li>
      </ul>
    </footer>
  );
};
