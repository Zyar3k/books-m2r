import { useContext } from "react";

import BookTile from "../BookTile/BookTile";
import Loader from "../../common/Loader/Loader";
import Info from "../../common/Info/Info";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import { StoreContext } from "../../../store/StoreProvider";

import styles from "./BookList.module.scss";

const BookList = ({ books }) => {
  const { error } = useContext(StoreContext);

  return (
    <section className={styles.bookList}>
      {books.length === 0 ? (
        books.length === 0 && !error ? (
          <Info>
            <h3>Brak wyników do wyświetlenia</h3>
          </Info>
        ) : (
          <Loader />
        )
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
