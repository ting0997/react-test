import React from "react";
import styles from "./footer.module.scss";

const Footer = ({
  handleClickBack,
  handleClick,
  previousPageLink,
  nextPageLink,
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__backoptions} onClick={handleClickBack}>
        <div className={styles.footer__arrowleft} />
        {previousPageLink}
      </div>
      <div className={styles.footer__previousoptions} onClick={handleClick}>
        {nextPageLink}
        <div className={styles.footer__arrowright} />
      </div>
    </footer>
  );
};

export default Footer;
