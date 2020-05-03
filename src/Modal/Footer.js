import React from 'react';

const Footer = ({ callToActionLabel, toggle }) => (
  <div className="white footer">
    <button onClick={() => toggle(false)}>Cancel</button>
    <button onClick={() => toggle(false)}>{callToActionLabel}</button>
  </div>
);

export default Footer;
