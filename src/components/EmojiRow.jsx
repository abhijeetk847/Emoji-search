import React from "react";
import EmojiRowResults from "./EmojiRowResults";
import "./emojiRowResults.css";

const EmojiRow = ({ emojiData }) => {
  return (
    <div className="container">
      {emojiData.map((emoji) => (
        <EmojiRowResults
          key={emoji.title}
          title={emoji.title}
          symbol={emoji.symbol}
        />
      ))}
    </div>
  );
};

export default EmojiRow;
