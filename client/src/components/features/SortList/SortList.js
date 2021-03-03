import { useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";

import styles from "./SortList.module.scss";

const SortList = () => {
  const { books, setBooks } = useContext(StoreContext);

  const sortByPage = (e) => {
    if (e.target.value === "up") {
      const sorted = [...books].sort((a, b) => {
        return a.page - b.page;
      });
      setBooks(sorted);
    } else if (e.target.value === "down") {
      const sorted = [...books].sort((a, b) => {
        return b.page - a.page;
      });
      setBooks(sorted);
    }
  };

  return (
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
        <button
          className='fas fa-chevron-up'
          onClick={sortByPage}
          value='up'
        ></button>
        <p>Sortuj po ilości stron</p>
        <button
          className='fas fa-chevron-down'
          onClick={sortByPage}
          value='down'
        ></button>
      </div>
    </div>
  );
};

export default SortList;
