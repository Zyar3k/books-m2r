import styles from "./Info.module.scss";

const Info = ({ children }) => {
  return <section className={styles.infoWrapper}>{children}</section>;
};

export default Info;
