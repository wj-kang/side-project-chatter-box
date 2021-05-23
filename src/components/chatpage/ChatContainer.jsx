import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/ChatPage.module.css';
import ChatAnnouncement from './ChatAnnouncement';
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
    return `${month} ${date}, ${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}`;
  };

  const chatContainer = useRef();
  const scrollToBottom = () => {
    const scrollValue = chatContainer.current.scrollHeight - chatContainer.current.clientHeight;
    chatContainer.current.scrollTo(0, scrollValue);
  };

  useEffect(() => {
    syncMsgData();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [msgs]);

  return (
    <div ref={chatContainer} className={styles.right_messages_container}>
      <ul className={styles.chat_list}>
        {msgs &&
          msgs.map((msg) => {
            const { message, sender, time, nickname } = msg;
            if (sender === 'join') {
              return <ChatAnnouncement nickname={nickname} type="join" />;
            } else if (sender === 'leave') {
              return <ChatAnnouncement nickname={nickname} type="leave" />;
            } else if (sender === uid) {
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
