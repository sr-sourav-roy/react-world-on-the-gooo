import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  //   console.log(country.area);
  const handleButton = () => {
    console.log("click me");
  };
  return (
    <div className="Country">
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
      <button onClick={handleButton}>Not visit</button>
    </div>
  );
};

export default Country;
