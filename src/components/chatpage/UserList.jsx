import React from 'react';
import styles from '../../styles/ChatPage.module.css';

const UserList = () => {
  return (
    <>
      <div className={styles.left_userlist_container}>
        <h3 className={styles.text_h3}>Users (2)</h3>
        <ul className={styles.left_userlist}>
          <li className={styles.left_userlist_nickname}>Kang (awerjisdjf123)</li>
          <li className={styles.left_userlist_nickname}>Park (rqwejisoaf412)</li>
          <li className={styles.left_userlist_nickname}>Kim (asdfwersoaf777)</li>
          <li className={styles.left_userlist_nickname}>Kim (asdfwersoaf777)</li>
          <li className={styles.left_userlist_nickname}>Kim (asdfwersoaf777)</li>
          <li className={styles.left_userlist_nickname}>Kim (asdfwersoaf777)</li>
          <li className={styles.left_userlist_nickname}>Kim (asdfwersoaf777)</li>{' '}
          <li className={styles.left_userlist_nickname}>Kim (asdfwersoaf777)</li>
          <li className={styles.left_userlist_nickname}>Kim (asdfwersoaf777)</li>{' '}
          <li className={styles.left_userlist_nickname}>Kim (asdfwersoaf777)</li>
          <li className={styles.left_userlist_nickname}>Kim (asdfwersoaf777)</li>
        </ul>
      </div>
    </>
  );
};

export default UserList;
