import React from 'react';
import styles from '../../styles/ChatPage.module.css';

const ChatBubbleLeft = ({ nickname, msg, time }) => {
  return (
    <li className={styles.chat_left}>
      <div className={styles.chat_nickname}>{nickname}</div>
      <div className={styles.chat_left_bubble_container}>
        <div className={styles.chat_left_bubble}>
          <span className={styles.chat_left_text}>{msg}</span>
        </div>
        <div className={styles.chat_time}>{time}</div>
      </div>
    </li>
  );
};

export default ChatBubbleLeft;
