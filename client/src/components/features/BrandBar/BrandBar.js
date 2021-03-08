import lcLogo from "../../../images/lc-logo.png";
import amaLogo from "../../../images/amazon-logo.png";
import bbcLogo from "../../../images/bbc.png";
import empLogo from "../../../images/empik-logo-png-transparent.png";
import ganLogo from "../../../images/gandalf.png";
import pozyLogo from "../../../images/pozy.png";

import styles from "./BrandBar.module.scss";

/*
https://lubimyczytac.pl/
https://www.amazon.pl/
https://www.bbc.com/
https://www.empik.com/
https://www.gandalf.com.pl/
http://www.pozycjeobowiazkowe.pl/

*/

const BrandBar = ({ closeMobileMenu }) => {
  return (
    <>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <img src={lcLogo} alt='' />
      </li>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <img src={amaLogo} alt='' />
      </li>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <img src={bbcLogo} alt='' />
      </li>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <img src={empLogo} alt='' />
      </li>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <img src={ganLogo} alt='' />
      </li>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <img src={pozyLogo} alt='' />
      </li>
    </>
  );
};

export default BrandBar;
