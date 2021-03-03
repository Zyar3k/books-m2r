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

  const sortByAuthor = (e) => {
    if (e.target.value === "up") {
      const sorted = [...books].sort((a, b) => {
        if (e.target.name === "lastName") {
          a = a.author.lastName;
          b = b.author.lastName;
        } else {
          a = a.author.name;
          b = b.author.name;
        }
        return a.localeCompare(b);
      });
      setBooks(sorted);
    } else if (e.target.value === "down") {
      const sorted = [...books].sort((a, b) => {
        if (e.target.name === "lastName") {
          a = a.author.lastName;
          b = b.author.lastName;
        } else {
          a = a.author.name;
          b = b.author.name;
        }

        return b.localeCompare(a);
      });
      setBooks(sorted);
    }
  };

  return (
    <div className={styles.filterIsOn}>
      <div className={styles.filtrWrapper}>
        <button
          onClick={sortByAuthor}
          className='fas fa-chevron-up'
          name='lastName'
          value='up'
        ></button>
        <p>Sortuj po nazwisku</p>
        <button
          onClick={sortByAuthor}
          className='fas fa-chevron-down'
          name='lastName'
          value='down'
        ></button>
      </div>
      <div className={styles.filtrWrapper}>
        <button
          onClick={sortByAuthor}
          className='fas fa-chevron-up'
          value='up'
        ></button>
        <p>Sortuj po imieniu</p>
        <button
          onClick={sortByAuthor}
          className='fas fa-chevron-down'
          value='down'
        ></button>
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
