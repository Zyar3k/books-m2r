import { useState } from "react";
import BurgerMenu from "../../features/BurgerMenu/BurgerMenu";
import ListFilter from "../../features/ListFilter/ListFilter";

import styles from "./Header.module.scss";

const Header = () => {
  const [click, setClick] = useState(false);

  const mobileMenuToggle = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
          <ListFilter closeMobileMenu={closeMobileMenu} />
        </ul>
        <BurgerMenu mobileMenuToggle={mobileMenuToggle} toggleMen={click} />
      </div>
    </header>
  );
};

export default Header;
