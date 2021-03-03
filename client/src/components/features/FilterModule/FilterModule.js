import { useState, useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";

import styles from "./FilterModule.module.scss";

const FilterModule = () => {
  const { setSelect } = useContext(StoreContext);
  const [isReaded, setIsReaded] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
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
  return (
    <>
      <div className={styles.filtrRow}>
        <label htmlFor=''>
          <input
            type='radio'
            name='readedFiltr'
            onClick={() => handleBookFilter("all")}
          />
          Pełna lista
        </label>
      </div>
      <div className={styles.filtrRow}>
        <label htmlFor='readed'>
          <input
            onClick={() => handleBookFilter("readed")}
            type='radio'
            name='readedFiltr'
            id='readed'
          />
        </label>
        {!isReaded ? "Stan ukończenia" : isReaded}
        <label htmlFor='unreaded'>
          <input
            onClick={() => handleBookFilter("unreaded")}
            type='radio'
            name='readedFiltr'
            id='unreaded'
          />
        </label>
      </div>
      <div className={styles.filtrRow}>
        <label htmlFor='available'>
          <input
            onClick={() => handleBookFilter("available")}
            type='radio'
            name='readedFiltr'
            id='available'
          />
        </label>
        {!isAvailable ? "Dostępność" : isAvailable}
        <label htmlFor='unavailable'>
          <input
            onClick={() => handleBookFilter("unavailable")}
            type='radio'
            name='readedFiltr'
            id='unavailable'
          />
        </label>
      </div>
    </>
  );
};

export default FilterModule;
