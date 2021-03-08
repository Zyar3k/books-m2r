import { useContext } from "react";
import { Link } from "react-router-dom";

import { StoreContext } from "../../../store/StoreProvider";

import styles from "./BookTile.module.scss";

const BookTile = ({ books }) => {
  const { isPageShow } = useContext(StoreContext);
  const {
    _id,
    author: { name, lastName },
    title,
    page,
  } = books;

  return (
    <Link to={`book/${_id}`} className={styles.bookTile}>
      <div className={styles.bookMain}>
        <h3 className={styles.bookTitle}>{title}</h3>
        <em className={styles.bookAuthor}>
          {name} {lastName}
          &nbsp;
          <strong className={styles.bookPage}>
            {isPageShow ? `(${page})` : null}
          </strong>
        </em>
      </div>
    </Link>
  );
};

export default BookTile;
