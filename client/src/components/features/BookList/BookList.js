import BookTile from "../BookTile/BookTile";
import Loader from "../../common/Loader/Loader";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import styles from "./BookList.module.scss";

const BookList = ({ books }) => {
  return (
    <section className={styles.bookList}>
      {books.length === 0 ? (
        <Loader />
      ) : (
        <>
          {books.map((books) => (
            <BookTile key={books._id} books={books} />
          ))}
        </>
      )}
      <ScrollToTop />
    </section>
  );
};

export default BookList;
