import React from 'react';
import ChatContainer from '../components/chatpage/ChatContainer';
import ChatInput from '../components/chatpage/ChatInput';
import UserList from '../components/chatpage/UserList';
import styles from '../styles/ChatPage.module.css';

const ChatPage = ({ dbService, uid, roomId, roomsInfo }) => {
  const handleNewMsg = (msg) => {
    dbService.newMessage(roomId, uid, msg);
  };

  return (
    <section className={styles.chatpage}>
      <div className={styles.left_section}>
        <div className={styles.left_nickname_container}>
          <h3 className={styles.text_h3}>{roomsInfo.users[uid].nickname}</h3>
        </div>
        <UserList roomsInfo={roomsInfo} />
      </div>
      <div className={styles.right_section}>
        <div className={styles.right_top}>
          <h3 className={styles.text_h3}>chatterbox.io/awerjiowjefkl123</h3>
          <button className={styles.right_top_btn}>Leave</button>
        </div>
        <ChatContainer />
        <ChatInput handleNewMsg={handleNewMsg} />
      </div>
    </section>
  );
};

export default ChatPage;