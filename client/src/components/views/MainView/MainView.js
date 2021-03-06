import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../../store/StoreProvider";
import BookList from "../../features/BookList/BookList";
import BackImg from "../../common/BackImg/BackImg";
import Info from "../../common/Info/Info";

import styles from "./MainView.module.scss";

const MainView = () => {
  let {
    books,
    selectedBooks,
    setSelectedBooks,
    select,
    setIsExtension,
    error,
  } = useContext(StoreContext);
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
    if (selectedBooks.length === 0) {
      setSelectedBooks(books);
    } else {
      setSelectedBooks(selectedBooks);
    }

    switch (select) {
      case "readed":
        selectedBooks = selectedBooks.filter((book) => book.readed === true);
        return <BookList books={selectedBooks} />;
      case "unreaded":
        selectedBooks = selectedBooks.filter((book) => book.readed !== true);
        return <BookList books={selectedBooks} />;
      case "available":
        selectedBooks = selectedBooks.filter((book) => book.available === true);
        return <BookList books={selectedBooks} />;
      case "unavailable":
        selectedBooks = selectedBooks.filter((book) => book.available !== true);
        return <BookList books={selectedBooks} />;
      default:
        return <BookList books={selectedBooks} />;
    }
  };

  return (
    <main>
      <BackImg />
      {error ? (
        <Info>
          <p>Upsss... coś poszło nie tak</p>
          <p>Brak danych do wyświetlenia</p>
        </Info>
      ) : (
        <div className={styles.mainView}>{bookList()}</div>
      )}
    </main>
  );
};

export default MainView;
