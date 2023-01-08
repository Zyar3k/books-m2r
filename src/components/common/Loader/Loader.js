import React from "react";

import styles from "./Loader.module.scss";

const Loader = () => (
  <div className={styles.loaderWrapper}>
    <div className={styles.loader}>
      <h2>
        <span>W</span>
        <span>c</span>
        <span>z</span>
        <span>y</span>
        <span>t</span>
        <span>y</span>
        <span>w</span>
        <span>a</span>
        <span>n</span>
        <span>i</span>
        <span>e</span>
        <span>...</span>
      </h2>
    </div>
  </div>
);

export default Loader;
