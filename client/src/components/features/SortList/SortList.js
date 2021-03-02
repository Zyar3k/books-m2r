import styles from "./SortList.module.scss";

const SortList = ({ closeMobileMenu }) => {
  return (
    <>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <label htmlFor='all'>
          <p>m2r</p>
          <input type='radio' name='listSelect' id='all' defaultChecked />
        </label>
      </li>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <label htmlFor='ama'>
          <p>amazon</p>
          <input type='radio' name='listSelect' id='ama' />
        </label>
      </li>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <label htmlFor='bbc'>
          <p>bbc</p>
          <input type='radio' name='listSelect' id='bbc' />
        </label>
      </li>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <label htmlFor='emp'>
          <p>empik</p>
          <input type='radio' name='listSelect' id='emp' />
        </label>
      </li>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <label htmlFor='gan'>
          <p>gandalf</p>
          <input type='radio' name='listSelect' id='gan' />
        </label>
      </li>
      <li onClick={closeMobileMenu} className={styles.navItem}>
        <label htmlFor='pozy'>
          <p>pozycje</p>
          <input type='radio' name='listSelect' id='pozy' />
        </label>
      </li>
    </>
  );
};

export default SortList;
