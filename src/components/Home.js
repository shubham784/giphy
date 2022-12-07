import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import "./style/Home.css";

import GifList from "./GifList";
import SearchGif from "./SearchGif";

const Home = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  const indexOfLastItem = currentPage*itemPerPage;
  const indexOfFirstItem = indexOfLastItem-itemPerPage;

  const currentItem = data.slice(indexOfFirstItem,indexOfLastItem);
  
  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
      try {
        const result = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "nb6WSpzb5jzGFXK8VywWrdSsp0GI98jb",
            limit: 500,
          },
        });
        setData(result.data.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const result = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "nb6WSpzb5jzGFXK8VywWrdSsp0GI98jb",
          q: search,
          limit: 500,
        },
      });
      setData(result.data.data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <>
      <SearchGif handleSubmit={handleSubmit} handleSearchChange={handleSearchChange} search={search}/>
      <div className="gifs">
        <GifList isLoading={isLoading} currentItem= {currentItem}/>
      </div>
      <div className="page-block">
        <Pagination itemPerPage={itemPerPage} totalItem = {data.length} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </div>      
    </>
  );
};

export default Home;
