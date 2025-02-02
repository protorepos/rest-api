"use client";
import React, { useState } from "react";
import CountryGrid from "./CountryGrid";
import { Country } from "../Types";

type RestCountriesProps = {
  countries: Country[];
};

const RestCountries = async ({ countries }: RestCountriesProps) => {
  const [cards, setNewCard] = useState(countries);
  return (
    <div>
      <CountryGrid countries={cards} />
    </div>
  );
};

export default RestCountries;
