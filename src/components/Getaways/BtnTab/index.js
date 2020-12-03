import React from 'react';

const BtnTab = ({ content, selectedBtn, className }) => {
  return (
    <button
      className={className}
      onClick={selectedBtn}
    >{content}</button>
  );
};

export default BtnTab;
