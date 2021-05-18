import React from 'react';
import LinkCreator from '../components/mainpage/LinkCreator';
import styles from '../styles/MainPage.module.css';

const MainPage = ({ dbService }) => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>Chatter Box</h1>
      <h3 className={styles.desc}>Enjoy truly simple open-chat</h3>
      <LinkCreator dbService={dbService} />
    </section>
  );
};

export default MainPage;
