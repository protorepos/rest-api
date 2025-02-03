"use client";
import React, { useState } from "react";
import CountryGrid from "./CountryGrid";
import { Country } from "../Types";
import FilterCountries from "./FilterCountries";

type RestCountriesProps = {
  countries: Country[];
};

const RestCountries = ({ countries }: RestCountriesProps) => {
  const [cards, setNewCard] = useState(countries);

  return (
    <div>
      <FilterCountries onSearchChange={setNewCard} allCountries={countries} />
      <CountryGrid countries={cards} />
    </div>
  );
};

export default RestCountries;
