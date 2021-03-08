import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../../store/StoreProvider";
import BookList from "../../features/BookList/BookList";

import styles from "./MainView.module.scss";

const MainView = () => {
  let { books, select, setIsExtension } = useContext(StoreContext);
  const history = useHistory();
  const currPath = history.location.pathname.slice(0, 6);

  const checkState = () => {
    if (currPath === "/") {
      setIsExtension(false);
    }
  };

  useEffect(() => {
    checkState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
