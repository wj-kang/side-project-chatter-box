import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from '../styles/MainPage.module.css';

const LinkCreator = () => {
  const [created, setCreated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [link, setLink] = useState('');

  const handleCreateRoom = () => {
    setLink(`chatterbox.io/room/${nanoid(12)}`);
    setCreated((prev) => !prev);
  };

  const handleCopyLink = () => {
    document.getElementById('link').select();
    document.execCommand('copy');
    document.getElementById('link').blur();
    setCopied(true);
  };

  const handleGoToLink = () => {
    console.log('push!');
    // history.push(link);
  };

  return (
    <div className={styles.section_container}>
      <button className={`${styles.create_btn} ${created && styles.created}`} onClick={handleCreateRoom}>
        Create Chat Link
      </button>

      <div className={`${styles.link_container} ${created && styles.created} `}>
        <div
          className={`${styles.input_container} ${copied && styles.copied}`}
          onClick={copied ? handleGoToLink : handleCopyLink}
        >
          <input id="link" type="text" className={styles.input} value={link} />
        </div>
        <button className={`${styles.link_btn} ${copied && styles.copied}`} onClick={handleCopyLink}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default LinkCreator;
