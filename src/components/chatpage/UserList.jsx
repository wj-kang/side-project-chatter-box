import React from 'react';
import styles from '../../styles/ChatPage.module.css';

const UserList = ({ roomsInfo }) => {
  return (
    <>
      <div className={styles.left_userlist_container}>
        <h3 className={styles.text_h3}>{`Users (${roomsInfo.userCount})`}</h3>
        <ul className={styles.left_userlist}>
          {Object.keys(roomsInfo.users)
            .filter((uid) => roomsInfo.users[uid].status)
            .map((uid) => (
              <li className={styles.left_userlist_nickname}>{roomsInfo.users[uid].nickname}</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;
