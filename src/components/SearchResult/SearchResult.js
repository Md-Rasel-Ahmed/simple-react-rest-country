import React, { useState } from "react";
import Country from "../Country/Country";
import SingleCountry from "../SingleCountry/SingleCountry";

const SearchResult = () => {
  const [inputVal, setInputValue] = useState();
  const [results, setResult] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <div className="d-flex">
        <input
          onChange={(e) => handleChange(e)}
          className="form-control me-2"
          type="search"
          value={inputVal}
          placeholder="Search"
          aria-label="Search"
        />
        <button
          onClick={handleClick}
          className="btn btn-outline-success"
          type="button"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchResult;
