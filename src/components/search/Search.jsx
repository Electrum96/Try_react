import React, { useState } from "react";
import "./search.scss";

const Search = function({onSearch}) {
    const [search, setSearch] = useState("")

    function handleSearch(e) {
        e.preventDefault();
        return  onSearch(search);

    }


    return <form className="search" onSubmit={handleSearch}>
        <input  className="search__input" type="text" value={search} placeholder="что ищем?" onChange={(e) => setSearch(e.target.value)}></input>
        <button className="search__button" type="submit">Найти</button>
    </form>

}
export default Search;