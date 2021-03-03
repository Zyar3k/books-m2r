import { useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";

import styles from "./BookTile.module.scss";

const BookTile = ({ books }) => {
  const { isPageShow } = useContext(StoreContext);
  const {
    // _id,
    author: { name, lastName },
    title,
    // key,
    // link,
    page,
    // readed,
    // available,
    // ama,
    // bbc,
    // emp,
    // gan,
    // pozy,
  } = books;
  // const name = author.name;
  // const lastName = author.lastName;

  return (
    <article className={styles.bookTile}>
      <h3 className={styles.bookTitle}>{title}</h3>
      <em className={styles.bookAuthor}>
        {name} {lastName}
        &nbsp;
        <strong className={styles.bookPage}>
          {isPageShow ? `(${page})` : null}
        </strong>
      </em>
    </article>
  );
};

export default BookTile;
