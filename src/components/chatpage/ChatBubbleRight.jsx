import React from 'react';
import styles from '../../styles/ChatPage.module.css';

const ChatBubbleRight = () => {
  return (
    <li className={styles.chat_right}>
      <div className={styles.chat_right_bubble_container}>
        <div className={styles.chat_time}>16:34</div>
        <div className={styles.chat_right_bubble}>
          <span className={styles.chat_right_text}>
            this is message.........this is message.........this is message.........this is message.........this is
            message.........this is message.........this is message......... this is message.........this is
            message.........this is message.........this is message.........this is message.........this is
            message.........
          </span>
        </div>
      </div>
    </li>
  );
};

export default ChatBubbleRight;
