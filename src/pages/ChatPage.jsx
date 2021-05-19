import React from 'react';
import ChatContainer from '../components/chatpage/ChatContainer';
import ChatInput from '../components/chatpage/ChatInput';
import UserList from '../components/chatpage/UserList';
import styles from '../styles/ChatPage.module.css';

const ChatPage = ({ dbService, uid, roomId, roomsInfo }) => {
  return (
    <section className={styles.chatpage}>
      <div className={styles.left_section}>
        <div className={styles.left_nickname_container}>
          <h3 className={styles.text_h3}>MyNickname</h3>
        </div>
        <UserList />
      </div>
      <div className={styles.right_section}>
        <div className={styles.right_top}>
          <h3 className={styles.text_h3}>chatterbox.io/awerjiowjefkl123</h3>
          <button className={styles.right_top_btn}>Leave</button>
        </div>
        <ChatContainer />
        <ChatInput />
      </div>
    </section>
  );
};

export default ChatPage;
