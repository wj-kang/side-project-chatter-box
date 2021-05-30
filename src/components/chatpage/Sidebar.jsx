import React, { useCallback } from 'react';
import UserList from './UserList';
import styles from '../../styles/Sidebar.module.css';
import chatStyles from '../../styles/ChatPage.module.css';

const Sidebar = ({ isSidebarOpen, roomsInfo, nickname, handleLeaveChat, setSidebarOpen }) => {
  const handleSidebarLeaveBtn = useCallback(() => {
    handleLeaveChat();
  }, []);

  const handleClickBackground = (e) => {
    if (e.target.id === 'background') {
      setSidebarOpen(false);
    }
  };

  return (
    <section //
      id="background"
      className={`${styles.background} ${isSidebarOpen && styles.on}`}
      onClick={handleClickBackground}
    >
      <div className={styles.sidebar}>
        <button //
          className={styles.hamburger}
          onClick={() => setSidebarOpen(false)}
        >
          <i class="fas fa-bars"></i>
        </button>

        <div className={chatStyles.left_nickname_container}>
          <h3 className={chatStyles.text_h3}>{nickname}</h3>
        </div>

        <UserList roomsInfo={roomsInfo} />

        <button //
          className={styles.leave}
          onClick={handleSidebarLeaveBtn}
        >
          Leave
        </button>
      </div>
    </section>
  );
};

export default React.memo(Sidebar);
