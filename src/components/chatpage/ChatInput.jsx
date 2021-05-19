import React from 'react';
import styles from '../../styles/ChatPage.module.css';

const ChatInput = () => {
  return (
    <div className={styles.rignt_input_container}>
      <input className={styles.right_input} type="text" placeholder="Write message.." />
      <button className={styles.right_input_btn}>Send</button>
    </div>
  );
};

export default ChatInput;
