import React from 'react';

const Footer = ({ callToActionLabel, toggle }) => (
  <div className="white footer" onClick={(e) => e.stopPropagation()}>
    <button onClick={() => toggle(false)}>Cancel</button>
    <button
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
