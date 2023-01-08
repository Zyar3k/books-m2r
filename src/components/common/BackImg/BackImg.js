import styles from "./BackImg.module.scss";

// import bgdImg from "../../../images/01028 Quote Drink Coffee And Read Good Bookswhite.png";
import bgdImg from "../../../images/01028 Quote Drink Coffee And Read Good Bookswhite.png";

const BackImg = () => {
  return (
    <img
      className={styles.bgdImg}
      src={bgdImg}
      alt='Quote Drink Coffee And Read Good Books'
    />
  );
};

export default BackImg;
