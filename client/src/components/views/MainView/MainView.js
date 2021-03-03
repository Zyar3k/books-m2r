import { useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";
import BookList from "../../features/BookList/BookList";

import styles from "./MainView.modules.scss";

const MainView = () => {
  let { books, select } = useContext(StoreContext);

  const bookList = () => {
    switch (select) {
      case "all":
        return <BookList books={books} />;
      case "ama":
        books = books.filter((book) => book.ama === true);
        return <BookList books={books} />;
      case "bbc":
        books = books.filter((book) => book.bbc === true);
        return <BookList books={books} />;
      case "emp":
        books = books.filter((book) => book.emp === true);
        return <BookList books={books} />;
      case "gan":
        books = books.filter((book) => book.bbc === true);
        return <BookList books={books} />;
      case "pozy":
        books = books.filter((book) => book.pozy === true);
        return <BookList books={books} />;
      case "readed":
        books = books.filter((book) => book.readed === true);
        return <BookList books={books} />;
      case "unreaded":
        books = books.filter((book) => book.readed !== true);
        return <BookList books={books} />;
      case "available":
        books = books.filter((book) => book.available === true);
        return <BookList books={books} />;
      case "unavailable":
        books = books.filter((book) => book.available !== true);
        return <BookList books={books} />;
      default:
        break;
    }
  };

  return (
    <main>
      <div className={styles.mainView}>{bookList()}</div>
    </main>
  );
};

export default MainView;
