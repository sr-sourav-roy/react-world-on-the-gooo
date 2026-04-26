import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  // visited Countries hook:------------>
  const [visitedCountries, setVisitedCountries] = useState([]);

  // button handleHooks:------>
  const handleVisitedCountries = (country) => {
    // console.log("handle visited country clicked", country);
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  // Flag visited hooks:----------->
  const [visitedFlag, setVisitedFlag] = useState([]);
  const handleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
    // console.log("clime", flag);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h1>Hello world RSC countries: {countries.length}</h1>
      <h3>Total Country Visited: {visitedCountries.length} </h3>

      <ol>
        {visitedCountries.map((country) => (
          <li key={country.ccn3.ccn3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="visitedFlag">
        {visitedFlag.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>
      <div className="Countries">
        {countries.map((country) => (
          <Country
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
            key={country.ccn3.ccn3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
