import styles from "./BurgerMenu.module.scss";

const BurgerMenu = ({ mobileMenuToggle, click }) => {
  return (
    <div className={styles.burgerWrapper} onClick={mobileMenuToggle}>
      <i className={click ? "fas fa-times" : "fas fa-bars"} />
    </div>
  );
};

export default BurgerMenu;
