import React from "react";
import { Country } from "../Types";
import Image from "next/image";
import Link from "next/link";

type CountryProps = {
  countries: Country[];
};
const CountryGrid = ({ countries }: CountryProps) => {
  return (
    <ul className="grid grid-cols-4 place-content-between justify-between gap-5">
      {countries.map((country) => (
        <li key={country.alpha2Code}>
          <Link href={`/countries/${country.alpha2Code}`}>
            <CountryCard country={country} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountryGrid;

type CountryCardProps = {
  country: Country;
};

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg border-2 border-gray-100 object-contain">
      <Image
        className="h-36 w-full object-cover object-center"
        alt={country.name}
        width={1}
        height={1}
        src={country.flags.svg}
      />
      <div className="p-2">
        <h2>
          <b>Country: </b>
          {country.name}
        </h2>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </article>
  );
};
