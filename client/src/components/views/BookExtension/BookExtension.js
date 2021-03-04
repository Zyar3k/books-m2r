import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import BookContent from "../../features/BookContent/BookContent";
import DotsImg from "../../features/DotsImg/DotsImg";

import { StoreContext } from "../../../store/StoreProvider";

const BookExtension = () => {
  const { books, setIsExtension } = useContext(StoreContext);
  const history = useHistory();
  const currId = history.location.pathname.slice(6);
  const currPath = history.location.pathname.slice(0, 6);

  const checkState = async () => {
    if (currPath !== "/") {
      setIsExtension(true);
    }
  };
  useEffect(() => {
    checkState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const bookElement = books
    .filter((book) => currId.includes(book._id))
    .map((book) => <BookContent key={book._id} book={book} />);

  return (
    <main>
      <DotsImg />
      {bookElement}
    </main>
  );
};

export default BookExtension;
