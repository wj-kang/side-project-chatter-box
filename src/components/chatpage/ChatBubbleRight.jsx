import React from 'react';
import styles from '../../styles/ChatPage.module.css';

const ChatBubbleRight = ({ msg, time }) => {
  const timeConvert = `${new Date(time).getHours().toLocaleString()}:${new Date(time).getMinutes().toLocaleString()}`;
  return (
    <li className={styles.chat_right}>
      <div className={styles.chat_right_bubble_container}>
        <div className={styles.chat_time}>{timeConvert}</div>
        <div className={styles.chat_right_bubble}>
          <span className={styles.chat_right_text}>{msg}</span>
        </div>
      </div>
    </li>
  );
};

export default ChatBubbleRight;
