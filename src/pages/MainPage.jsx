import React from 'react';
import LinkCreator from '../components/LinkCreator';
import styles from '../styles/MainPage.module.css';

const MainPage = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>Chatter Box</h1>
      <h3 className={styles.desc}>Enjoy truly simple open-chat</h3>
      <LinkCreator />
    </section>
  );
};

export default MainPage;
