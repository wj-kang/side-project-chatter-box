import React from 'react';
import styles from '../../styles/ChatPage.module.css';

const ChatAnnouncement = ({ nickname, type }) => {
  const msgConverter = (nickname, type) => {
    return type === 'join' //
      ? `<${nickname}> joined`
      : type === 'leave'
      ? `<${nickname}> left`
      : '';
  };

  return (
    <li className={styles.announcement}>
      <div className={styles.announcement_text_container}>
        <span className={styles.announcement_text}>{msgConverter(nickname, type)}</span>
      </div>
    </li>
  );
};

export default React.memo(ChatAnnouncement);
