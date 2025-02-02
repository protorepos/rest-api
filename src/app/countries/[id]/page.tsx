import BackBtn from "~/app/components/BackBtn";
import { Country } from "~/app/Types";

export default async function IndividualCountryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const responce = await fetch(`https://www.apicountries.com/alpha/${id}`);
  const country = (await responce.json()) as Country;

  return (
    <div>
      <BackBtn />
      <h3>{country.name}</h3>
      <p>{country.population}</p>
    </div>
  );
}
