import React from "react";

import styles from "./BookContent.module.scss";

const BookContent = ({ book }) => {
  console.log(book);
  return <div>{book.title}</div>;
};

export default BookContent;
