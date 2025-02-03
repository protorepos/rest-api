import Link from "next/link";
import { Country } from "../Types";

type BorderCountryBtnProps = {
  id: string;
};

const BorderCountryBtn = async ({ id }: BorderCountryBtnProps) => {
  const responce = await fetch(`https://www.apicountries.com/alpha/${id}`);
  const country = (await responce.json()) as Country;
  if (!country.borders) {
    return <p>No Borders</p>;
  }
  return (
    <div>
      {country.borders.map((name) => (
        <Link href={`/countries/${country.alpha2Code}`}>
          <button className="border-2 border-black p-3">{name}</button>
        </Link>
      ))}
    </div>
  );
};

export default BorderCountryBtn;
