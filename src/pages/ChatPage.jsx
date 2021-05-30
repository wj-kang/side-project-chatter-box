import React, { useCallback, useState } from 'react';
import ChatContainer from '../components/chatpage/ChatContainer';
import ChatInput from '../components/chatpage/ChatInput';
import Sidebar from '../components/chatpage/Sidebar';
import UserList from '../components/chatpage/UserList';
import styles from '../styles/ChatPage.module.css';

const ChatPage = ({ dbService, uid, roomId, roomsInfo }) => {
  const [popMsg, setPopMsg] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleNewMsg = (msg) => {
    const nickname = roomsInfo.users[uid].nickname;
    dbService.newMessage(roomId, uid, nickname, msg);
  };

  const handlePopMsg = useCallback(() => {
    setPopMsg(true);
    setTimeout(() => {
      setPopMsg(false);
    }, 1500);
  }, []);

  const handleCopyLinkBtn = () => {
    document.getElementById('link').select();
    document.execCommand('copy');
    document.getElementById('link').blur();
    handlePopMsg();
  };

  const handleLeaveChat = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Leave the chat room')) {
      dbService.leaveRoom(roomId, uid, roomsInfo.users[uid].nickname);
      setSidebarOpen(false);
    }
  };

  const leaveBtn = (
    <button //
      className={styles.right_top_leave}
      onClick={handleLeaveChat}
    >
      Leave
    </button>
  );

  const hamburgerBtn = (
    <button //
      className={styles.right_top_hamburger}
      onClick={() => setSidebarOpen(true)}
    >
      <i class="fas fa-bars"></i>
    </button>
  );

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
              <h3 className={styles.right_top_title}>{`#${roomId}`}</h3>
              <button className={styles.right_top_linkcopy} onClick={handleCopyLinkBtn}>
                <i class="fas fa-link"></i>
              </button>
            </div>
            {/* Hamburger btn is only for mobile  */}
            {hamburgerBtn}
            {leaveBtn}
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

      <Sidebar //
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        roomsInfo={roomsInfo}
        nickname={roomsInfo.users[uid].nickname}
        handleLeaveChat={handleLeaveChat}
      />

      <div className={`${styles.pop_msg} ${popMsg && styles.on}`}>Invite Link Copied</div>
    </>
  );
};

export default ChatPage;
