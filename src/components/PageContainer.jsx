import React from 'react';
import styles from '../styles/PageContainer.module.css';

const PageContainer = ({ children }) => {
  return (
    <div className={styles.page}>
      <section className={styles.container}>{children}</section>
    </div>
  );
};

export default PageContainer;
