import { useContext, useState } from "react";

import { StoreContext } from "../../../store/StoreProvider";

import FilterModule from "../../features/FilterModule/FilterModule";
import SortList from "../../features/SortList/SortList";
import StatsModule from "../../features/StatsModule/StatsModule";

import styles from "./Footer.module.scss";

const Footer = () => {
  const { isExtension } = useContext(StoreContext);
  const [isSorted, setIsSorted] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isStats, setIsStats] = useState(false);

  const sortToggle = () => setIsSorted(!isSorted);
  const filterToggle = () => setIsFiltered(!isFiltered);
  const statsToggle = () => setIsStats(!isStats);
  return (
    <footer>
      {isStats ? (
        <div className={styles.filterIsOn}>
          <StatsModule />
        </div>
      ) : null}
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
        {isExtension ? (
          <button
            disabled={isFiltered ? true : false}
            className={styles.filterToggle}
            onClick={statsToggle}
          >
            Statystyki
          </button>
        ) : (
          <>
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
          </>
        )}
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
