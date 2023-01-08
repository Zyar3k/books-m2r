import styles from "./DotsImg.module.scss";

import bgdImg from "../../../images/dots.png";

const BackImg = () => {
  return <img className={styles.bgdImg} src={bgdImg} alt='dots' />;
};

export default BackImg;
