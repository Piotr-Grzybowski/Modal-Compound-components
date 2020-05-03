import React from 'react';

const Content = ({ children }) => (
  <div className="white" onClick={(e) => e.stopPropagation()}>
    {children}
  </div>
);

export default Content;
