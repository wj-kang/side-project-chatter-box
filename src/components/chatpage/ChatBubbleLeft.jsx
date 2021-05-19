import React from 'react';
import styles from '../../styles/ChatPage.module.css';

const ChatBubbleLeft = () => {
  return (
    <li className={styles.chat_left}>
      <div className={styles.chat_nickname}>nickname</div>
      <div className={styles.chat_left_bubble_container}>
        <div className={styles.chat_left_bubble}>
          <span className={styles.chat_left_text}>
            this is message.........this is message.........this is message.........this is message.........this is
            message.........this is message.........this is message......... this is message.........this is
            message.........this is message.........this is message.........this is message.........this is
            message.........
          </span>
        </div>
        <div className={styles.chat_time}>16:34</div>
      </div>
    </li>
  );
};

export default ChatBubbleLeft;
