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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    handleJoinChat(nickname);
  };

  return (
    <section className={styles.wait}>
      <div className={styles.gohome_container}>
        <Link className={styles.gohome} to="/">
          {`< Home`}
        </Link>
      </div>
      <h1 className={styles.title}>ChatterBox is ready!</h1>
      <h3 className={styles.desc}>Enjoy truly simple open-chat</h3>

      <form className={styles.center_container}>
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
          onClick={handleSubmit}
          onKeyDown={handleSubmit}
        >
          Join the Chat
        </button>
      </form>
    </section>
  );
};

export default React.memo(WaitPage);
