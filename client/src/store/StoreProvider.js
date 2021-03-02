import { createContext, useEffect, useState } from "react";

import request from "../helpers/reguest";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const { data } = await request.get("/books");
    console.log(data);
    setBooks(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <StoreContext.Provider value={{ books, setBooks }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
