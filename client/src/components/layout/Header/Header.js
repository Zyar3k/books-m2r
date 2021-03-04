import { useContext, useState } from "react";

import { StoreContext } from "../../../store/StoreProvider";

import BurgerMenu from "../../features/BurgerMenu/BurgerMenu";
import ListFilter from "../../features/ListFilter/ListFilter";
import BrandBar from "../../features/BrandBar/BrandBar";

import styles from "./Header.module.scss";

const Header = () => {
  const { isExtension } = useContext(StoreContext);
  const [click, setClick] = useState(false);

  const mobileMenuToggle = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header>
      <div className={styles.header}>
        <a href='/' className={styles.logoWrapper}>
          <p>
            MUST
            <span>2</span>
            READ
          </p>
        </a>
        <ul
          className={
            click
              ? `${styles.navWrapper} ${styles.active}`
              : `${styles.navWrapper}`
          }
        >
          {/* setIsExtension */}
          {isExtension ? (
            <BrandBar closeMobileMenu={closeMobileMenu} />
          ) : (
            <ListFilter closeMobileMenu={closeMobileMenu} />
          )}
        </ul>
        <BurgerMenu mobileMenuToggle={mobileMenuToggle} toggleMen={click} />
      </div>
    </header>
  );
};

export default Header;
