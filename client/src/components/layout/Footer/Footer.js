import { useState } from "react";
import FilterModule from "../../features/FilterModule/FilterModule";
import SortList from "../../features/SortList/SortList";

import styles from "./Footer.module.scss";

const Footer = () => {
  const [isSorted, setIsSorted] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  const sortToggle = () => setIsSorted(!isSorted);
  const filterToggle = () => setIsFiltered(!isFiltered);
  return (
    <footer>
      {isSorted ? (
        <div className={styles.filterIsOn}>
          <SortList />
        </div>
      ) : null}
      {isFiltered ? (
        <div className={styles.filterIsOn}>
          <FilterModule />
        </div>
      ) : null}
      <div className={styles.footer}>
        <p>
          @Zyar3k
          <span>2021</span>
        </p>
        <button
          disabled={isFiltered ? true : false}
          className={styles.filterToggle}
          onClick={sortToggle}
        >
          Sortuj
        </button>
        <button
          disabled={isSorted ? true : false}
          className={styles.filterToggle}
          onClick={filterToggle}
        >
          Filtruj
        </button>
        <div className={styles.contactShort}>
          <p>
            <span>Masz uwagi?</span>
            Napisz:
          </p>
          <i className='fas fa-envelope'></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
