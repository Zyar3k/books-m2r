import ButtonBack from "../../common/ButtonBack/ButtonBack";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <label className={styles.label} htmlFor='name'>
          Twoje imię
        </label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Podaj swoje imię'
        />
        <label className={styles.label} htmlFor='msg'>
          Wiadomość
        </label>
        <textarea
          type='text'
          name='msg'
          id='msg'
          cols='60'
          rows='5'
          placeholder='Wpisz wiadomość'
        />
        <label className={styles.label} htmlFor='mail'>
          E-mail (opcjonalnie)
        </label>
        <input type='mail' id='mail' placeholder='Twój e-mail' />
        <span className={styles.btnWrapper}>
          <button type='submit'>Wyślij</button>
        </span>
      </form>
      <ButtonBack>Wróć</ButtonBack>
    </main>
  );
};

export default Contact;
