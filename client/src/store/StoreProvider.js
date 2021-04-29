import { createContext, useEffect, useState } from "react";

import request from "../helpers/reguest";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [select, setSelect] = useState("all");
  const [isPageShow, setIsPageShow] = useState(false);
  const [isExtension, setIsExtension] = useState(false);
  const [ama, setAma] = useState([]);
  const [bbc, setBbc] = useState([]);
  const [emp, setEmp] = useState([]);
  const [gan, setGan] = useState([]);
  const [pozy, setPozy] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState();

  const fetchData = async () => {
    try {
      const { data, status } = await request.get("/books");
      setStatus(status);
      data.forEach((book) => {
        if (book.ama) {
          ama.push(book);
          setAma(ama);
        }
        if (book.bbc) {
          bbc.push(book);
          setBbc(bbc);
        }
        if (book.emp) {
          emp.push(book);
          setEmp(emp);
        }
        if (book.gan) {
          gan.push(book);
          setGan(gan);
        }
        if (book.pozy) {
          pozy.push(book);
          setPozy(pozy);
        }
      });

      setBooks(data);
    } catch (error) {
      console.log(error);

      setError(false);
      console.log(error.status);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        ama,
        setAma,
        bbc,
        setBbc,
        emp,
        setEmp,
        gan,
        setGan,
        pozy,
        setPozy,
        selectedBooks,
        setSelectedBooks,
        error,
        setError,
        status,
        setStatus,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
