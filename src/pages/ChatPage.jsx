import React, { useState } from 'react';
import ChatContainer from '../components/chatpage/ChatContainer';
import ChatInput from '../components/chatpage/ChatInput';
import UserList from '../components/chatpage/UserList';
import styles from '../styles/ChatPage.module.css';

const ChatPage = ({ dbService, uid, roomId, roomsInfo }) => {
  const [popMsg, setPopMsg] = useState(false);

  const handleNewMsg = (msg) => {
    const nickname = roomsInfo.users[uid].nickname;
    dbService.newMessage(roomId, uid, nickname, msg);
  };

  const handlePopMsg = () => {
    setPopMsg(true);
    setTimeout(() => {
      setPopMsg(false);
    }, 1500);
  };
  const handleCopyLinkBtn = () => {
    document.getElementById('link').select();
    document.execCommand('copy');
    document.getElementById('link').blur();
    handlePopMsg();
  };

  const handleLeaveChat = () => {
    dbService.leaveRoom(roomId, uid, roomsInfo.users[uid].nickname);
  };

  return (
    <>
      <section className={styles.chatpage}>
        <div className={styles.left_section}>
          <div className={styles.left_nickname_container}>
            <h3 className={styles.text_h3}>{roomsInfo.users[uid].nickname}</h3>
          </div>
          <UserList roomsInfo={roomsInfo} />
        </div>
        <div className={styles.right_section}>
          <div className={styles.right_top}>
            <div className={styles.right_top_title_container}>
              <h3 className={styles.right_top_title}>{`Room #${roomId}`}</h3>
              <button className={styles.right_top_linkcopy} onClick={handleCopyLinkBtn}>
                <i class="fas fa-link"></i>
              </button>
            </div>

            <button //
              className={styles.right_top_leave}
              onClick={handleLeaveChat}
            >
              Leave
            </button>
          </div>
          <ChatContainer //
            dbService={dbService}
            uid={uid}
            roomId={roomId}
          />
          <ChatInput handleNewMsg={handleNewMsg} />
        </div>
      </section>

      <input
        type="text"
        id="link"
        className={styles.hiddenlink}
        value={`${process.env.REACT_APP_BASE_URL}/room/${roomId}`}
      />

      <div className={`${styles.pop_msg} ${popMsg && styles.on}`}>Invite Link Copied</div>
    </>
  );
};

export default ChatPage;
