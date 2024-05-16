import Image from 'next/image';
async function getCharacterDetail(id) {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await res.json();
  console.log('Route', data);
  return data;
}

export default async function CharacterDetail({ searchParams }) {
  const data = await getCharacterDetail(searchParams.id);
  console.log('data', data);
  return (
    <>
      <h1>Character Detail</h1>
      <h1>Name: {data.name}</h1>
      <Image
        src="/generic.jpg"
        alt="starwarsImage"
        width={200}
        height={300}
      ></Image>
      <p>Eyes Color: {data.eye_color}</p>
      <p>Hair color: {data.hair_color}</p>
      <p>Height: {data.height}</p>
      <p>Skin color: {data.skin_color}</p>
      <p>Mass: {data.mass}</p>
    </>
  );
}
