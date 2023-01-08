import { useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";

import styles from "./StatsModule.module.scss";

const StatsModule = () => {
  const { books, ama, bbc, emp, gan, pozy } = useContext(StoreContext);

  const readedPercent = (list) => {
    let listLength = list.length;
    let finished = 0;
    list.forEach((item) => {
      if (item.readed === true) {
        finished += 1;
      } else {
        return null;
      }
    });
    const percent = (finished / listLength) * 100;
    let res = Math.round(percent);
    return res;
  };

  const readedBooks = (list) => {
    let res = 0;
    list.forEach((item) => {
      if (item.readed === true) {
        res += 1;
      } else {
        return null;
      }
    });

    return res;
  };

  const availableBooks = (list) => {
    let available = 0;
    list.forEach((item) => {
      if (item.available === true) {
        available += 1;
      } else {
        return null;
      }
    });
    return available;
  };

  const availablePercent = (list) => {
    let listLength = list.length;
    let available = 0;
    list.forEach((item) => {
      if (item.available === true) {
        available += 1;
      } else {
        return null;
      }
    });
    const percent = (available / listLength) * 100;
    let res = Math.round(percent);
    return res;
  };

  return (
    <div className={styles.statsModule}>
      <div className={styles.listWrapper}>
        <h3>M2R ({books.length})</h3>
        <p>
          Przeczytane &nbsp; <strong>{readedBooks(books)}</strong>
          <em>&nbsp;({readedPercent(books)}%)</em>
        </p>
        <p>
          Dostępne &nbsp;<strong>{availableBooks(books)}</strong>{" "}
          <em>&nbsp;({availablePercent(books)}%)</em>
        </p>
      </div>
      <div className={styles.listWrapper}>
        <h3>Amazon</h3>
        <p>
          Przeczytane &nbsp; <strong>&nbsp;{readedBooks(ama)}</strong>{" "}
          <em>&nbsp;({readedPercent(ama)}%)</em>
        </p>
      </div>
      <div className={styles.listWrapper}>
        <h3>BBC</h3>
        <p>
          Przeczytane &nbsp; <strong>&nbsp;{readedBooks(bbc)}</strong>{" "}
          <em>&nbsp;({readedPercent(bbc)}%)</em>
        </p>
      </div>
      <div className={styles.listWrapper}>
        <h3>Empik</h3>
        <p>
          Przeczytane &nbsp; <strong>&nbsp;{readedBooks(emp)}</strong>{" "}
          <em>&nbsp;({readedPercent(emp)}%)</em>
        </p>
      </div>
      <div className={styles.listWrapper}>
        <h3>Gandalf</h3>
        <p>
          Przeczytane &nbsp; <strong>&nbsp;{readedBooks(gan)}</strong>{" "}
          <em>&nbsp;({readedPercent(gan)}%)</em>
        </p>
      </div>
      <div className={styles.listWrapper}>
        <h3>Pozycje obowiązkowe</h3>
        <p>
          Przeczytane &nbsp; <strong>&nbsp;{readedBooks(pozy)}</strong>{" "}
          <em>&nbsp;({readedPercent(pozy)}%)</em>
        </p>
      </div>
    </div>
  );
};

export default StatsModule;
