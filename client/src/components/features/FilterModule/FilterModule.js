import { useState, useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";

import styles from "./FilterModule.module.scss";

const FilterModule = () => {
  const { setSelect } = useContext(StoreContext);
  const [isReaded, setIsReaded] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [moreFilters, setMoreFilters] = useState(false);
  const handleBookFilter = (option) => {
    if (option === "readed") {
      setIsReaded("Przeczytane");
    } else if (option === "unreaded") {
      setIsReaded("Nieprzeczytane");
    } else if (option === "available") {
      setIsAvailable("Dostępne");
    } else if (option === "unavailable") {
      setIsAvailable("Niedostępne");
    }
    setSelect(option);
  };

  const showFilters = () => {
    setMoreFilters(!moreFilters);
  };
  return (
    <section>
      <h3 onClick={showFilters}>Dodatkowe filtry{moreFilters ? ":" : null}</h3>
      {moreFilters ? (
        <>
          <div className={styles.filtrRow}>
            <div className={`${styles.radioGroup} ${styles.fullList}`}>
              <label className={styles.radio}>
                <input
                  onClick={() => handleBookFilter("all")}
                  type='radio'
                  name='readedFiltr'
                />
                <span className={styles.newInput}></span>
              </label>
              <p>Pełna lista</p>
            </div>
          </div>
          <div className={styles.filtrRow}>
            <div className={styles.radioGroup}>
              <label className={styles.radio} htmlFor='readed'>
                <input
                  onClick={() => handleBookFilter("readed")}
                  type='radio'
                  name='readedFiltr'
                  id='readed'
                />
                <span className={styles.newInput}></span>
              </label>
              <p>{!isReaded ? "Stan ukończenia" : isReaded}</p>
              <label className={styles.radio} htmlFor='unreaded'>
                <input
                  onClick={() => handleBookFilter("unreaded")}
                  type='radio'
                  name='readedFiltr'
                  id='unreaded'
                />
                <span className={styles.newInput}></span>
              </label>
            </div>
          </div>
          <div className={styles.filtrRow}>
            <div className={styles.radioGroup}>
              <label className={styles.radio} htmlFor='available'>
                <input
                  onClick={() => handleBookFilter("available")}
                  type='radio'
                  name='readedFiltr'
                  id='available'
                />
                <span className={styles.newInput}></span>
              </label>
              <p>{!isAvailable ? "Dostępność" : isAvailable}</p>
              <label className={styles.radio} htmlFor='unavailable'>
                <input
                  onClick={() => handleBookFilter("unavailable")}
                  type='radio'
                  name='readedFiltr'
                  id='unavailable'
                />
                <span className={styles.newInput}></span>
              </label>
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default FilterModule;
