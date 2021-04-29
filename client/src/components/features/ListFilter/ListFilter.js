import { useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";

import styles from "./ListFilter.module.scss";

const ListFilter = ({ closeMobileMenu }) => {
  const { ama, bbc, emp, gan, pozy, setSelectedBooks, books } = useContext(
    StoreContext
  );

  return (
    <>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <label
          htmlFor='all'
          className={`${styles.radio} ${styles.radioBefore}`}
        >
          <span className={styles.radioInput}>
            <input
              type='radio'
              name='listSelect'
              id='all'
              defaultChecked
              onClick={() => setSelectedBooks(books)}
            />
            <span className={styles.radioControl}></span>
          </span>
          <span className={styles.radioLabel}>B2R</span>
        </label>
      </li>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <label
          htmlFor='ama'
          className={`${styles.radio} ${styles.radioBefore}`}
        >
          <span className={styles.radioInput}>
            <input
              type='radio'
              name='listSelect'
              id='ama'
              onClick={() => setSelectedBooks(ama)}
            />
            <span className={styles.radioControl}></span>
          </span>
          <span className={styles.radioLabel}>Amazon</span>
        </label>
      </li>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <label
          htmlFor='bbc'
          className={`${styles.radio} ${styles.radioBefore}`}
        >
          <span className={styles.radioInput}>
            <input
              type='radio'
              name='listSelect'
              id='bbc'
              onClick={() => setSelectedBooks(bbc)}
            />
            <span className={styles.radioControl}></span>
          </span>
          <span className={styles.radioLabel}>BBC</span>
        </label>
      </li>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <label
          htmlFor='emp'
          className={`${styles.radio} ${styles.radioBefore}`}
        >
          <span className={styles.radioInput}>
            <input
              type='radio'
              name='listSelect'
              id='emp'
              onClick={() => setSelectedBooks(emp)}
            />
            <span className={styles.radioControl}></span>
          </span>
          <span className={styles.radioLabel}>Empik</span>
        </label>
      </li>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <label
          htmlFor='gan'
          className={`${styles.radio} ${styles.radioBefore}`}
        >
          <span className={styles.radioInput}>
            <input
              type='radio'
              name='listSelect'
              id='gan'
              onClick={() => setSelectedBooks(gan)}
            />
            <span className={styles.radioControl}></span>
          </span>
          <span className={styles.radioLabel}>Gandalf</span>
        </label>
      </li>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <label
          htmlFor='pozy'
          className={`${styles.radio} ${styles.radioBefore}`}
        >
          <span className={styles.radioInput}>
            <input
              type='radio'
              name='listSelect'
              id='pozy'
              onClick={() => setSelectedBooks(pozy)}
            />
            <span className={styles.radioControl}></span>
          </span>
          <span className={styles.radioLabel}>Pozycje</span>
        </label>
      </li>
    </>
  );
};

export default ListFilter;
