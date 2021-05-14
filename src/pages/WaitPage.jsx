import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/WaitPage.module.css';

const WaitPage = ({ handleJoinChat }) => {
  const [isValid, setIsValid] = useState(false);
  const [input, setInput] = useState('');

  const handleChangeInput = ({ target: { value } }) => {
    setInput(value);
    setIsValid(value.length > 0 ? true : false);
  };

  return (
    <section className={styles.wait}>
      <Link className={styles.gotohome} to="/main">
        Go to Home
      </Link>
      <h1 className={styles.title}>ChatterBox is ready!</h1>
      <h3 className={styles.desc}>Enjoy truly simple open-chat</h3>

      <div className={styles.center_container}>
        <div className={styles.user_count}>Users : 0</div>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your nickname"
          value={input}
          onChange={handleChangeInput}
        />
        <button className={`${styles.join_btn} ${isValid && styles.isValid}`} onClick={isValid ? handleJoinChat : null}>
          Join the Chat
        </button>
      </div>
    </section>
  );
};

export default WaitPage;
