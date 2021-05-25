/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>© 2021 Wonjun Kang. All rights reserved.</div>
      <div className="footer_btns">
        <a className="footer_link" href="https://github.com/wj-kang" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a className="footer_link" href="https://github.com/wj-kang" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
