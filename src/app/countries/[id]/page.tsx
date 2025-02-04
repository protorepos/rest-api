import BackBtn from "~/app/components/BackBtn";
import BorderCountryBtn from "~/app/components/BorderCountryBtn";
import { Country } from "~/app/Types";

export default async function IndividualCountryPage({
  params,
}: {
  params: { id: string };
}) {
  const id = (await params).id;
  const responce = await fetch(`https://www.apicountries.com/alpha/${id}`);
  const country = (await responce.json()) as Country;

  return (
    <div>
      <BackBtn />
      <h3>{country.name}</h3>
      <p>{country.population}</p>
      <BorderCountryBtn id={country.alpha2Code} />
    </div>
  );
}
