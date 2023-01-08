import styles from "./BurgerMenu.module.scss";

const BurgerMenu = ({ mobileMenuToggle, toggleMen }) => {
  return (
    <div className={styles.burgerWrapper} onClick={mobileMenuToggle}>
      <i className={toggleMen ? "fas fa-times" : "fas fa-bars"} />
    </div>
  );
};

export default BurgerMenu;
