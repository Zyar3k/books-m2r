import { createContext, useEffect, useState } from "react";

import request from "../helpers/reguest";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [select, setSelect] = useState("all");
  const [isPageShow, setIsPageShow] = useState(false);
  const [isExtension, setIsExtension] = useState(false);

  const fetchData = async () => {
    const { data } = await request.get("/books");

    setBooks(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <StoreContext.Provider
      value={{
        books,
        setBooks,
        select,
        setSelect,
        isPageShow,
        setIsPageShow,
        isExtension,
        setIsExtension,
        // isReaded,
        // setIsReaded,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
