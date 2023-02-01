import React from "react";
import "./emojiRowResults.css";

const EmojiRowResults = ({ title, symbol }) => {
  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  return (
    <div className="container-row" data-clipboard-text={symbol}>
      <img src={src} alt={title} />
      <span className="title">{title}</span>
      <span className="info">Click to Copy Image</span>
    </div>
  );
};

export default EmojiRowResults;
