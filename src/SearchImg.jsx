import React from "react";


const SearchImg = (props) => {
    const img = `https://source.unsplash.com/600x300/?${props.pic}`;
    return (
        <>
            <div>
                <img src={img} alt="image" />
            </div>
        </>
    );
}

export default SearchImg;