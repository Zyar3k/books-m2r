import { useHistory } from "react-router-dom";

import styles from "./ButtonBack.module.scss";

const ButtonBack = ({ children }) => {
  const history = useHistory();
  const backToList = () => {
    history.goBack();
  };
  return (
    <button className={styles.buttonBack} onClick={backToList}>
      {children}
    </button>
  );
};

export default ButtonBack;
