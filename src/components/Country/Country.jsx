import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);
  //   console.log(country.area);
  const handleButton = () => {
    // basic system
    // if (visited) {
    //   setVisited{false}
    // }
    // else {
    //     setVisited{true}
    // }

    // second systemsa:
    setVisited(visited ? false : true);

    // third systems:
    // setVisited(!visited);
  };
  return (
    <div className={`Country ${visited && "Country-visited"}`}>
      {/* // <div className={`Country ${visited ? "Country-visited" : "not-visited"}`}> */}
      <img src={country.flags.flags.png} alt="" />
      <h2>Name:{country.name.common}</h2>
      <h4>Region:{country.region.region}</h4>
      <h4>Continents :{country.continents.continents}</h4>
      {/* <h4>currencies :{country?.currencies.currencies?.EUR}</h4> */}
      <h4>Population:{country.population.population}</h4>
      <h4>
        Area:{country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </h4>
      <button onClick={handleButton}>
        {visited ? "Visited" : "Not visited"}
      </button>
    </div>
  );
};

export default Country;
