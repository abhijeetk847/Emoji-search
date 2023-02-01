import EmojiList from "./emojiList.json";

const filteredEmoji = (emojiName, maxValue) => {
  return EmojiList.filter((emoji) => {
    if (emoji.keywords.includes(emojiName.toLowerCase())) {
      return true;
    }
    if (emoji.title.toLowerCase().includes(emojiName.toLowerCase())) {
      return true;
    }
    return false;
  }).slice(0, maxValue);
};

export default filteredEmoji;
