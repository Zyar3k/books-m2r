const BookTile = ({ books }) => {
  const {
    // _id,
    author: { name, lastName },
    title,
    // key,
    // link,
    // page,
    // readed,
    // available,
    // ama,
    // bbc,
    // emp,
    // gan,
    // pozy,
  } = books;
  // const name = author.name;
  // const lastName = author.lastName;

  return (
    <div>
      <h3>{title}</h3>
      <em>
        {name} {lastName}
      </em>
    </div>
  );
};

export default BookTile;
