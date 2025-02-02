import React from "react";
import { Country } from "../Types";

type CountryProps = {
  countries: Country[];
};
const CountryGrid = ({ countries }: CountryProps) => {
  return (
    <ul>
      {countries.map((country) => (
        <li>{country.name}</li>
      ))}
    </ul>
  );
};

export default CountryGrid;

// const CountryCard = ({ country }: CountryProps) => {
//   return (
//     <>
//       <h1>{c.name}</h1>
//       <p>{c.population}</p>
//     </>
//   );
// };
