import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import BookContent from "../../features/BookContent/BookContent";
import DotsImg from "../../common/DotsImg/DotsImg";

import { StoreContext } from "../../../store/StoreProvider";

const BookExtension = () => {
  const { books, setIsExtension } = useContext(StoreContext);
  const location = useLocation();
  const currId = location.pathname.slice(6);
  const currPath = location.pathname.slice(0, 6);

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
