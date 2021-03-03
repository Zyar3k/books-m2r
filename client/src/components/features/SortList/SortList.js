import { useContext, useState } from "react";

import { StoreContext } from "../../../store/StoreProvider";

import styles from "./SortList.module.scss";

const SortList = () => {
  const { books, setBooks, setIsPageShow } = useContext(StoreContext);
  const [isSortModule, setisSortModule] = useState(false);

  const showSortModule = () => {
    setisSortModule(!isSortModule);
  };

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
    setIsPageShow(true);
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
    setIsPageShow(false);
  };

  return (
    <div className={styles.filterIsOn}>
      <h3 onClick={showSortModule}>Sortowanie{isSortModule ? ":" : null}</h3>
      {isSortModule ? (
        <>
          <div className={styles.filtrWrapper}>
            <button
              onClick={sortByAuthor}
              className='fas fa-chevron-up'
              name='lastName'
              value='up'
            ></button>
            <p>Po nazwisku</p>
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
            <p>Po imieniu</p>
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
            <p>Po ilości stron</p>
            <button
              className='fas fa-chevron-down'
              onClick={sortByPage}
              value='down'
            ></button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SortList;
