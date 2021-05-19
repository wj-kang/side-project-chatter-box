import React from 'react';
import styles from '../../styles/ChatPage.module.css';
import ChatBubbleLeft from './ChatBubbleLeft';
import ChatBubbleRight from './ChatBubbleRight';

const ChatContainer = () => {
  return (
    <div className={styles.right_messages_container}>
      <ul className={styles.chat_list}>
        <ChatBubbleLeft />
        <ChatBubbleLeft />
        <ChatBubbleRight />
        <ChatBubbleLeft />
        <ChatBubbleLeft />
        <ChatBubbleRight />
        <ChatBubbleRight />
        <ChatBubbleLeft />
      </ul>
    </div>
  );
};

export default ChatContainer;
