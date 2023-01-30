import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className='header'>
      <img
        alt="img-1"
        src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
        height="32"
        width="32"
      />
      Emoji Search
      <img
        alt="img-2"
        src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
        height="32"
        width="32"
      />
    </header>
  );
};

export default Header;
