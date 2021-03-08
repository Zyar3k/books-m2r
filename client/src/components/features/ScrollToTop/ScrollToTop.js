import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

import styles from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div className={styles.scrollToTop} onClick={scrollToTop}>
      <i className={`${styles.icon} fas fa-chevron-up`}></i>
    </div>
  );
};

export default ScrollToTop;
