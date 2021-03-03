import { useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";
import BookList from "../../features/BookList/BookList";

import styles from "./MainView.modules.scss";

const MainView = () => {
  const { books } = useContext(StoreContext);

  return (
    <>
      <div className={styles.mainView}>
        <BookList books={books} />
      </div>
    </>
  );
};

export default MainView;
