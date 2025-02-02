import React from "react";
import { Country } from "../Types";

type CountryGridProps = {
  country: Country[];
};
const CountryGrid = ({ country }: CountryGridProps) => {
  return (
    <ul>
      {country.map((c) => (
        <li>
          <CountryCard newCountry={country} />
        </li>
      ))}
    </ul>
  );
};

export default CountryGrid;

type CountryCardProps = {
  newCountry: Country[];
};

const CountryCard = ({ newCountry }: CountryCardProps) => {
  return (
    <>
      <h1>{newCountry.name}</h1>
      <p>{newCountry.population}</p>
    </>
  );
};
