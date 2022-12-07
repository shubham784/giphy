import React from 'react';
import {SearchOutlined } from '@ant-design/icons';

const SearchGif = ({ search, handleSearchChange, handleSubmit }) => {
  return (
    <div>
        <form className="inputBlock">
          <input
            type="text"
            className="input"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search for gifs"
          />
          <button className="searchIcon" type="submit" onClick={handleSubmit}>
            <SearchOutlined style={{ color: "white", fontSize: "33px" }} />
          </button>
        </form>
      </div>
  )
}

export default SearchGif