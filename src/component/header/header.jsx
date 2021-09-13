import React from "react";
import iconFile from "../../icons-file.svg";
import styles from "./header.module.scss";

const Header = ({ header }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__title}>
        <div
          className={styles.header__image}
          style={{ backgroundImage: `url(${iconFile})` }}
        />
        <div>{header}</div>
      </div>
      <div className={styles.header__arrowup} />
    </header>
  );
};

export default Header;
