import React from "react";
import styles from "./main.module.scss";
import ipadMini from "../../ipad-mini.jpg";

const Main = ({ contentDescription }) => {
  return (
    <div className={styles.main}>
      <div
        className={styles.main__image}
        style={{ backgroundImage: `url(${ipadMini})` }}
      />
      <section className={styles.main__text}>
        <div dangerouslySetInnerHTML={{ __html: `${contentDescription}` }} />
      </section>
    </div>
  );
};

export default Main;
