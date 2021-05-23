import React, { useRef, useState } from 'react';
import styles from '../../styles/ChatPage.module.css';

const ChatInput = ({ handleNewMsg }) => {
  const textRef = useRef();
  const [input, setInput] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length < 1) return;

    handleNewMsg(input);
    setInput('');
    textRef.current.focus();
  };

  return (
    <form className={styles.rignt_input_container}>
      <input
        className={styles.right_input}
        type="text"
        value={input}
        ref={textRef}
        onChange={handleInputChange}
        placeholder="Write message.."
      />

      <button //
        type="submit"
        className={styles.right_input_btn}
        onClick={handleSubmit}
        onKeyDown={handleSubmit}
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
