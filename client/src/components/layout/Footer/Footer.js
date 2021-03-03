import { useState } from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  const [isFilter, setIsFilter] = useState(false);

  const filterToggle = () => setIsFilter(!isFilter);
  return (
    <footer>
      {isFilter ? (
        <div className={styles.filterIsOn}>
          <div className={styles.filtrWrapper}>
            <i className='fas fa-chevron-up'></i>
            <p>Sortuj po nazwisku</p>
            <i className='fas fa-chevron-down'></i>
          </div>
          <div className={styles.filtrWrapper}>
            <i className='fas fa-chevron-up'></i>
            <p>Sortuj po imieniu</p>
            <i className='fas fa-chevron-down'></i>
          </div>
          <div className={styles.filtrWrapper}>
            <i className='fas fa-chevron-up'></i>
            <p>Sortuj po ilości stron</p>
            <i className='fas fa-chevron-down'></i>
          </div>
        </div>
      ) : null}
      <div className={styles.footer}>
        <p>@Zyar3k 2021</p>
        <p className={styles.filterToggle} onClick={filterToggle}>
          Filtruj
        </p>
        <div className={styles.contactShort}>
          <p>Masz uwagi? Napisz:</p>
          <i className='fas fa-envelope'></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
