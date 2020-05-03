import React from 'react';

const Footer = ({ callToActionLabel, toggle }) => (
  <div className="white footer">
    <button className="btn" onClick={() => toggle(false)}>
      Cancel
    </button>
    <button
      className="btn"
      onClick={() => {
        toggle(false);
        alert('OK');
      }}
    >
      {callToActionLabel}
    </button>
  </div>
);

export default Footer;
