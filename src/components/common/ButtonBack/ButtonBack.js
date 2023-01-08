import { useNavigate } from "react-router-dom";

import styles from "./ButtonBack.module.scss";

const ButtonBack = ({ children }) => {
  const navigate = useNavigate();

  const backToList = () => navigate(-1);
  return (
    <button className={styles.buttonBack} onClick={backToList}>
      {children}
    </button>
  );
};

export default ButtonBack;
