import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/WaitPage.module.css';

const WaitPage = ({ handleJoinChat, userCount }) => {
  const [isValid, setIsValid] = useState(false);
  const [nickname, setNickname] = useState('');

  const handleChangeInput = ({ target: { value } }) => {
    setNickname(value);
    setIsValid(value.length > 0 ? true : false);
  };

  return (
    <section className={styles.wait}>
      <Link className={styles.gotohome} to="/">
        {`< Home`}
      </Link>
      <h1 className={styles.title}>ChatterBox is ready!</h1>
      <h3 className={styles.desc}>Enjoy truly simple open-chat</h3>

      <div className={styles.center_container}>
        <div className={styles.user_count}>{`Users : ${userCount}`}</div>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your nickname"
          value={nickname}
          onChange={handleChangeInput}
        />
        <button
          className={`${styles.join_btn} ${isValid && styles.isValid}`}
          onClick={isValid ? () => handleJoinChat(nickname) : null}
        >
          Join the Chat
        </button>
      </div>
    </section>
  );
};

export default WaitPage;
