import { useState, useEffect } from "react";

import imgStar from "../../../images/star.png";

import styles from "./StarRanking.module.scss";

const StarRanking = ({ book }) => {
  const [stars, setStars] = useState([]);
  const { ama, bbc, emp, gan, pozy } = book;

  const countingStars = () => {
    let starTable = [];
    if (ama === true) starTable.push(1);
    if (bbc === true) starTable.push(1);
    if (emp === true) starTable.push(1);
    if (gan === true) starTable.push(1);
    if (pozy === true) starTable.push(1);
    setStars(starTable);
  };
  const renderEle = stars.map(() => (
    <img key={Math.random()} src={imgStar} alt='star' />
  ));

  useEffect(() => {
    countingStars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className={styles.bookStars}>{renderEle}</div>;
};

export default StarRanking;
