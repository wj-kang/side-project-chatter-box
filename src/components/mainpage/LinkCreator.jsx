import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../styles/MainPage.module.css';

const LinkCreator = ({ dbService, setPopMsg }) => {
  const history = useHistory();
  const [created, setCreated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleCreateRoom = useCallback(() => {
    setLoading(true);
    dbService.createNewChat(setRoomId, setCreated);
  }, []);

  const handleCopyLink = () => {
    document.getElementById('link').select();
    document.execCommand('copy');
    document.getElementById('link').blur();

    setPopMsg(true);
    setTimeout(() => {
      setPopMsg(false);
    }, 3000);

    setCopied(true);
  };

  const handleGoToLink = () => {
    history.push(`/room/${roomId}`);
  };

  return (
    <div className={styles.section_container}>
      <button className={`${styles.create_btn} ${created && styles.created}`} onClick={handleCreateRoom}>
        {isLoading ? ( //
          <div className={styles.loader}></div>
        ) : (
          `Create Chat Link`
        )}
      </button>

      <div className={`${styles.link_container} ${created && styles.created} `}>
        <div
          className={`${styles.input_container} ${copied && styles.copied}`}
          onClick={copied ? handleGoToLink : handleCopyLink}
        >
          <input
            id="link"
            type="text"
            className={styles.input}
            value={`${process.env.REACT_APP_BASE_URL}/room/${roomId}`}
          />
        </div>
        {copied ? (
          <button className={`${styles.link_btn} ${copied && styles.copied}`} onClick={handleGoToLink}>
            Join
          </button>
        ) : (
          <button className={`${styles.link_btn}`} onClick={handleCopyLink}>
            Copy
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(LinkCreator);
