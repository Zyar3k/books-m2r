import BookTile from "../BookTile/BookTile";

const BookList = ({ books }) => {
  return (
    <>
      {books.length === 0 ? (
        "Wczytuję"
      ) : (
        <>
          {books.map((books) => (
            <BookTile key={books._id} books={books} />
          ))}
        </>
      )}
    </>
  );
};

export default BookList;
