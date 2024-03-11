import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Eric Phan</h1>
        <p className={styles.description}>
          A software engineer starting at an entry-level position in full-stack
          developer, aiming to develop into a seasoned full-stack engineer
          with a wealth of experience.
          </p>
          <p className={styles.description}>
          I am an excellent self-starter, a strong
          team player capable of independent work, a skilled multitasker, and
          driven to consistently surpass expectations.
        </p>
        <a href="mailto:ericphan7@outlook.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/avatar.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
