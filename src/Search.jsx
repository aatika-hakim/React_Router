import React, { useState } from "react";
import SearchImg from "./SearchImg";


const Search = () => {
    const [img, setImg] = useState();
    const addEvent = (event)=>{
        const data = event.target.value;

        setImg(data);
    }
    return (
        <>
        <div>
            <input type="text" 
            placeholder="search anything"
            value={img}
            onChange= {addEvent} />
            <SearchImg  pic={img} />
        </div>
        </>
    );
}

export default Search;