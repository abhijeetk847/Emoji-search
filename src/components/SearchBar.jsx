import React from "react";
import "./searchbar.css";

const SearchBar = ({ textChange }) => {
  const handleChange = (event) => {
    textChange(event);
  };

  return (
    <div className="search_bar">
      <div>
        <input
          type="text"
          placeholder="Search"
          style={{ width: "100%", height: "30px" }}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
