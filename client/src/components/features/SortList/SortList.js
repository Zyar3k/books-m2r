import styles from "./SortList.module.scss";

const SortList = ({ closeMobileMenu }) => {
  return (
    <>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <label
          htmlFor='all'
          className={`${styles.radio} ${styles.radioBefore}`}
        >
          <span className={styles.radioInput}>
            <input type='radio' name='listSelect' id='all' defaultChecked />
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
            <input type='radio' name='listSelect' id='ama' />
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
            <input type='radio' name='listSelect' id='bbc' />
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
            <input type='radio' name='listSelect' id='emp' />
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
            <input type='radio' name='listSelect' id='gan' />
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
            <input type='radio' name='listSelect' id='pozy' />
            <span className={styles.radioControl}></span>
          </span>
          <span className={styles.radioLabel}>Pozycje</span>
        </label>
      </li>
    </>
  );
};

export default SortList;
