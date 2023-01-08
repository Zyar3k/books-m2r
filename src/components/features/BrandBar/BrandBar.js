import lcLogo from "../../../images/lc-logo.png";
import amaLogo from "../../../images/amazon-logo.png";
import bbcLogo from "../../../images/bbc.png";
import empLogo from "../../../images/empik-logo-png-transparent.png";
import ganLogo from "../../../images/gandalf.png";
import pozyLogo from "../../../images/pozy.png";

import styles from "./BrandBar.module.scss";

const BrandBar = ({ closeMobileMenu }) => {
  return (
    <>
      <a
        href='https://lubimyczytac.pl/'
        onClick={closeMobileMenu}
        className={styles.navItem}
      >
        <img src={lcLogo} alt='logo lubimy-czytac' />
      </a>
      <a
        href='https://www.amazon.pl/'
        onClick={closeMobileMenu}
        className={styles.navItem}
      >
        <img src={amaLogo} alt='logo amazon' />
      </a>
      <a
        href='https://www.bbc.com/'
        onClick={closeMobileMenu}
        className={styles.navItem}
      >
        <img src={bbcLogo} alt='logo bbc' />
      </a>
      <a
        href='https://www.empik.com/'
        onClick={closeMobileMenu}
        className={styles.navItem}
      >
        <img src={empLogo} alt='logo empik' />
      </a>
      <a
        href='https://www.gandalf.com.pl/'
        onClick={closeMobileMenu}
        className={styles.navItem}
      >
        <img src={ganLogo} alt='logo gandalf' />
      </a>
      <a
        href='http://www.pozycjeobowiazkowe.pl/'
        onClick={closeMobileMenu}
        className={styles.navItem}
      >
        <img src={pozyLogo} alt='logo pozycje-ulubione' />
      </a>
    </>
  );
};

export default BrandBar;
