import React, { useEffect, useState } from 'react';
import styles from '../../styles/ChatPage.module.css';
import ChatBubbleLeft from './ChatBubbleLeft';
import ChatBubbleRight from './ChatBubbleRight';

const ChatContainer = ({ dbService, uid, roomId }) => {
  const [msgs, setMsgs] = useState(null);

  const syncMsgData = () => {
    dbService.syncMessageData(roomId, uid, setMsgs);
  };

  const timeConvert = (timestamp) => {
    const time = new Date(timestamp);
    const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = MONTH[time.getMonth()];
    const date = time.getDate();
    const hour = time.getHours();
    const min = time.getMinutes();
    return `${month} ${date}, ${hour}:${min.length < 2 ? `0${min}` : min}`;
  };

  useEffect(() => {
    syncMsgData();
  }, []);

  return (
    <div className={styles.right_messages_container}>
      <ul className={styles.chat_list}>
        {msgs &&
          msgs.map((msg) => {
            const { message, sender, time, nickname } = msg;
            if (sender === uid) {
              return (
                <ChatBubbleRight //
                  msg={message}
                  time={timeConvert(time)}
                />
              );
            } else {
              return (
                <ChatBubbleLeft //
                  nickname={nickname}
                  msg={message}
                  time={timeConvert(time)}
                />
              );
            }
          })}
      </ul>
    </div>
  );
};

export default ChatContainer;
