import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import SearchResult from "../SearchResult/SearchResult";
import SingleCountry from "../SingleCountry/SingleCountry";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [singleC, setSingleC] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="container">
      <SingleCountry></SingleCountry>
      <div className="row">
        {countries.map((country) => (
          <div className="col-lg-4 col-md-6 col-sm-12 g-3">
            <Country key={country.idd} countr={country}></Country>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
