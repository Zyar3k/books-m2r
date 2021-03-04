import { useHistory } from "react-router-dom";

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
  } = book;
  const history = useHistory();

  const backToList = () => {
    history.goBack();
  };
  return (
    <div className={styles.bookContentWrapper}>
      <div className={styles.bookContent}>
        <div className={styles.stars}>*****</div>
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
            <span>14h34m</span>
          </h4>
        </div>
        <a className={styles.lcLink} href={link}>
          <p>Opis:</p>
          <img src={lcLogo} alt='lubimyczytac_logo' />
        </a>
        <div className={styles.wrapperOnList}>
          <div className={`${styles.listCheck} ${styles.trueCheck}`}>
            Amazon
          </div>
          <div className={styles.listCheck}>BBC</div>
          <div className={styles.listCheck}>Empik</div>
          <div className={styles.listCheck}>Gandalf</div>
          <div className={styles.listCheck}>
            Pozycje <br /> obowiązkowe
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.myInfoWrapper}>
            <img className={styles.readedImg} src={imgRead} alt='readed' />
            <img className={styles.availableImg} src={imgAva} alt='available' />
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
