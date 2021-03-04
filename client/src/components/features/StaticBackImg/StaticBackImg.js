import styles from "./StaticBackImg.module.scss";

import img from "../../../images/PngItem_403800.png";

const BackImg = () => {
  return (
    <img
      className={styles.bgdImg}
      src={img}
      alt='Quote Drink Coffee And Read Good Books'
    />
  );
};

export default BackImg;
