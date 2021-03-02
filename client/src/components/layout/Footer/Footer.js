import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <p>@Zyar3k 2021</p>
        <div className={styles.contactShort}>
          <p>Masz uwagi? Napisz:</p>
          <i className='fas fa-envelope'></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
