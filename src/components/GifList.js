import React from 'react';
import Loader from "./Loader";

const GifList = ({ isLoading, currentItem }) =>{
    if(isLoading){
        return <Loader/>
    }
    return currentItem.map((item) => {
        return (
          <div key={item.id} className="gif">
            <img src={item.images.fixed_height.url} alt="" />
          </div> 
        );
      })
  }

export default GifList;