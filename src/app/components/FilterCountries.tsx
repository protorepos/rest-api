import React, { useState } from "react";
import { Country } from "../Types";

type FilterProps = {
  allCountries: Country[];
  onSearchChange: (arr: Country[]) => void;
};

const FilterCountries = ({ allCountries, onSearchChange }: FilterProps) => {
  return (
    <div className="my-5 flex justify-between">
      <InputFilter
        allCountries={allCountries}
        onSearchChange={onSearchChange}
      />
      <SelectFilter />
    </div>
  );
};

const InputFilter = ({ allCountries, onSearchChange }: FilterProps) => {
  const [searchString, setSearchString] = useState("");
  const onSearch = (input: string) => {
    console.log("SEARCHING: ", input);
    let newCountriesArr: Country[] = [];

    if (input === "") {
      return allCountries;
    }
    for (let index = 0; index < allCountries.length; index++) {
      const currentIndex = allCountries[index];
      if (currentIndex?.name.includes(searchString)) {
        newCountriesArr.push(currentIndex);
      }
    }
    return newCountriesArr;
  };
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        value={searchString}
        onChange={(e) => {
          const input =
            searchString.length > 1
              ? searchString + e.target.value.slice(-1)
              : e.target.value;
          setSearchString(e.target.value);
          onSearchChange(onSearch(input));
        }}
        placeholder="Search for countries..."
        className="rounded-md border-2 border-gray-100 px-2 py-1 focus-within:border-blue-500"
      />
    </>
  );
};

const SelectFilter = () => {
  return (
    <>
      <p>SelectFilter</p>
    </>
  );
};

export default FilterCountries;
