'use client';

import Image from 'next/image';

import Link from 'next/link';

export async function ListOfCharacters({ characters }) {
  return characters.results.map((item) => {
    const regex = /\/(\d+)\/$/;
    const match = item.url.match(regex);
    console.log(match[1]);
    return (
      <article key={item.name}>
        <p>{item.name}</p>
        <Image
          src="/generic.jpg"
          alt="starwarsImage"
          width={200}
          height={300}
        ></Image>
        <p>Eyes color: {item.eye_color}</p>
        <p>Gender: {item.gender}</p>
        <Link
          href={{
            pathname: `/characters/${item.name}`,
            query: { id: match[1] },
          }}
          className="bg-black hover:bg-white text-sky-400"
        >
          Click me
        </Link>
      </article>
    );
  });
}
