import BookTile from "../BookTile/BookTile";

import styles from "./BookList.module.scss";

const BookList = ({ books }) => {
  return (
    <section className={styles.bookList}>
      {books.length === 0 ? (
        "Wczytuję"
      ) : (
        <>
          {books.map((books) => (
            <BookTile key={books._id} books={books} />
          ))}
        </>
      )}
    </section>
  );
};

export default BookList;
