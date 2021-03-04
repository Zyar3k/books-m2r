import { useHistory } from "react-router-dom";

import StarRanking from "../StarRanking/StarRanking";

import lcLogo from "../../../images/lc-logo.png";
import imgRead from "../../../images/read-svg-png.png";
import imgAva from "../../../images/wood_hand_kindle_en.png";

import styles from "./BookContent.module.scss";

const BookContent = ({ book }) => {
  const {
    title,
    author: { name, lastName },
    link,
    page,
    readed,
    available,
    ama,
    bbc,
    emp,
    gan,
    pozy,
  } = book;
  const history = useHistory();

  // Szacowany przelicznik: 200 słów na minutę, czyli 1 strona na 1 minutę czytania.
  function timeCounter(params) {
    let page = params;
    let hours = Math.floor(page / 60);
    let minutes = page % 60;
    params = ` ${hours}h: ${minutes}m`;
    return params;
  }

  const backToList = () => {
    history.goBack();
  };
  return (
    <div className={styles.bookContentWrapper}>
      <div className={styles.bookContent}>
        <StarRanking book={book} />
        <h2 className={styles.bookTitle}>{title}</h2>
        <em className={styles.bookAuthor}>
          {name}&nbsp;{lastName}
        </em>
        <div className={styles.pageWrapper}>
          <h4>
            Ilość stron:
            <span>{page}</span>
          </h4>
          <h4>
            Czas czytania:
            <span>{timeCounter(page)}</span>
          </h4>
        </div>
        <a className={styles.lcLink} href={link}>
          <p>Opis:</p>
          <img src={lcLogo} alt='lubimyczytac_logo' />
        </a>
        <div className={styles.wrapperOnList}>
          <div
            className={
              ama
                ? `${styles.listCheck} ${styles.trueCheck}`
                : `${styles.listCheck}`
            }
          >
            Amazon
          </div>
          <div
            className={
              bbc
                ? `${styles.listCheck} ${styles.trueCheck}`
                : `${styles.listCheck}`
            }
          >
            BBC
          </div>
          <div
            className={
              emp
                ? `${styles.listCheck} ${styles.trueCheck}`
                : `${styles.listCheck}`
            }
          >
            Empik
          </div>
          <div
            className={
              gan
                ? `${styles.listCheck} ${styles.trueCheck}`
                : `${styles.listCheck}`
            }
          >
            Gandalf
          </div>
          <div
            className={
              pozy
                ? `${styles.listCheck} ${styles.trueCheck}`
                : `${styles.listCheck}`
            }
          >
            Pozycje <br /> obowiązkowe
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.myInfoWrapper}>
            <img
              className={
                readed
                  ? `${styles.readedImg} ${styles.true}`
                  : `${styles.readedImg}`
              }
              src={imgRead}
              alt='readed'
            />
            <img
              className={
                available
                  ? `${styles.availableImg} ${styles.true}`
                  : `${styles.availableImg}`
              }
              src={imgAva}
              alt='available'
            />
          </div>
          <button className={styles.buttonBack} onClick={backToList}>
            Powrót do listy
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookContent;
