import bookImg from "../../../images/old-book.png";

import styles from "./DynamicBgdImg.module.scss";

const DynamicBgdImg = () => {
  return (
    <img
      className={styles.bgdImg}
      src={bookImg}
      alt='Quote Drink Coffee And Read Good Books'
    />
  );
};

export default DynamicBgdImg;
