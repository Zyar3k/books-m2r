import { useContext } from "react";
import { useHistory } from "react-router-dom";

import BookContent from "../../features/BookContent/BookContent";

import { StoreContext } from "../../../store/StoreProvider";

const BookExtension = () => {
  const { books } = useContext(StoreContext);
  const history = useHistory();
  const currId = history.location.pathname.slice(6);

  const bookElement = books
    .filter((book) => currId.includes(book._id))
    .map((book) => <BookContent key={book._id} book={book} />);

  return <main>{bookElement}</main>;
};

export default BookExtension;
