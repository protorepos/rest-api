import RestCountries from "./components/RestCountries";
import { Country } from "./Types";

export default async function HomePage() {
  const responce = await fetch("https://www.apicountries.com/countries");
  const countries = (await responce.json()) as Country[];
  return (
    <>
      <RestCountries countries={countries} />
    </>
  );
}
