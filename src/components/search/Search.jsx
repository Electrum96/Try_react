import React from "react";
import "./search.scss";

const Search = function() {

    return <div className="search">
        <input  className="search__input" type="text" placeholder="что ищем?"></input>
        <button className="search__button">Найти</button>
    </div>

}
export default Search;