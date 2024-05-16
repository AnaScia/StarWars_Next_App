import { ListOfCharacters } from '../Components/ListOfCharacters';

export const metadata = {
  title: 'Characters',
};
export default async function Characters() {
  const url = await fetch('https://swapi.dev/api/people/?page=1');
  //const url = await fetch('https://swapi.dev/api/droid/');
  //const url = await fetch('https://swapi.dev/api/wookie/');
  //const url = await fetch('https://swapi.dev/api/species/rodian/');
  const res = await url.json();
  console.log('Characters route', res);

  return (
    <div>
      <ListOfCharacters characters={res} />
    </div>
  );
}
