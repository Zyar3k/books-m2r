import { useState } from "react";

import styles from "./Header.module.scss";

const Header = () => {
  const [click, setClick] = useState(false);

  const mobileMenuToggle = () => setClick(!click);

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          <p>
            MUST
            <span>2</span>
            READ
          </p>
        </div>
        <ul
          className={
            click
              ? `${styles.navWrapper} ${styles.active}`
              : `${styles.navWrapper}`
          }
        >
          <li className={styles.navItem}>m2r</li>
          <li className={styles.navItem}>amazon</li>
          <li className={styles.navItem}>bbc</li>
          <li className={styles.navItem}>empik</li>
          <li className={styles.navItem}>gandalf</li>
          <li className={styles.navItem}>pozycje</li>
        </ul>

        <div className={styles.burgerWrapper} onClick={mobileMenuToggle}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
