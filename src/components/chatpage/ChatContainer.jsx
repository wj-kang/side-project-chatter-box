import React, { useEffect, useState } from 'react';
import styles from '../../styles/ChatPage.module.css';
import ChatBubbleLeft from './ChatBubbleLeft';
import ChatBubbleRight from './ChatBubbleRight';

const ChatContainer = ({ dbService, uid, roomId }) => {
  const [msgs, setMsgs] = useState(null);

  const syncMsgData = () => {
    dbService.syncMessageData(roomId, setMsgs);
  };

  useEffect(() => {
    syncMsgData();
  }, []);

  return (
    <div className={styles.right_messages_container}>
      <ul className={styles.chat_list}>
        {msgs &&
          Object.keys(msgs).map((id) => {
            const { message, sender, time, nickname } = msgs[id];
            if (sender === uid) {
              return (
                <ChatBubbleRight //
                  msg={message}
                  time={time}
                />
              );
            } else {
              return (
                <ChatBubbleLeft //
                  nickname={nickname}
                  msg={message}
                  time={time}
                />
              );
            }
          })}
      </ul>
    </div>
  );
};

export default ChatContainer;
