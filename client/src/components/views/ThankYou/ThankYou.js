import ButtonBack from "../../common/ButtonBack/ButtonBack";

import styles from "./ThankYou.module.scss";

const ThankYou = () => {
  return (
    <main className={styles.main}>
      <h2>Dziękuję za Twoją wiadomość :)</h2>
      <ButtonBack>Wróć do listy</ButtonBack>
    </main>
  );
};

export default ThankYou;
