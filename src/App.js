import Header from "./components/Header";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import filterEmoji from "./filterEmoji";
import EmojiRow from "./components/EmojiRow";

export default function App() {
  const [filteredEmoji, setFilteredEmoji] = useState(() => filterEmoji("", 20));

  const searchEmojiHandler = (event) => {
    setFilteredEmoji(() => filterEmoji(event.target.value, 20));
  };

  return (
    <div>
      <Header />
      <SearchBar textChange={searchEmojiHandler} />
      <EmojiRow emojiData={filteredEmoji} />
    </div>
  );
}
