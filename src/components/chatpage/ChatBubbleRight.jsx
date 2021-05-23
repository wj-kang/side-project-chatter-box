import React from 'react';
import styles from '../../styles/ChatPage.module.css';

const ChatBubbleRight = ({ msg, time }) => {
  return (
    <li className={styles.chat_right}>
      <div className={styles.chat_right_bubble_container}>
        <div className={styles.chat_time}>{time}</div>
        <div className={styles.chat_right_bubble}>
          <span className={styles.chat_right_text}>{msg}</span>
        </div>
      </div>
    </li>
  );
};

export default ChatBubbleRight;
