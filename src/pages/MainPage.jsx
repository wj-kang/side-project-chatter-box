import React, { useState } from 'react';
import LinkCreator from '../components/mainpage/LinkCreator';
import styles from '../styles/MainPage.module.css';

const MainPage = ({ dbService }) => {
  const [popMsg, setPopMsg] = useState(false);

  return (
    <>
      <section className={styles.main}>
        <h1 className={styles.title}>Chatter Box</h1>
        <h3 className={styles.desc}>Enjoy truly simple open-chat</h3>
        <LinkCreator dbService={dbService} setPopMsg={setPopMsg} />
      </section>
      <div className={`${styles.pop_msg} ${popMsg && styles.on}`}>Invite Link Copied</div>
    </>
  );
};

export default MainPage;
