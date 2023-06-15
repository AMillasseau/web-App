// Table Client Component
 
import React from 'react';
import Image from 'next/image';
import style from '@/app/page.module.css';

import { PrismaClient } from '@prisma/client'


 function Imag({ url }) {
  if (url === '') {
    return <div></div>;
  } else {
    return <Image alt="" src={url} height={100} />;
  }
}
/*
async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return response.json();
}
*/
function Dispo({ booked, bid }) {
  /*const queryParams = {
    id: bid.toString(),
  };

  const url = `/api/bookbutt?${new URLSearchParams(queryParams).toString()}`;

  const handleClick = async () => {
    if (booked) return;
    
    const { data, error } = useSWR(url, fetcher)
    
  };*/

  return (
    <div>
      {booked ? (
        <button type="button" disabled>
          Already booked
        </button>
      ) : (
        <button type="button">
          Book
        </button>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const gamelist = await prisma.games.findMany()

  return {
    props : { gamelist }
  }
}

export default async function Catalog({gamelist}) { 
  const url = `/api/gamelist`; 

  return (
    <div className={style.catdiv}>
      <p className={style.bigtxt}>Catalog</p>
      {gamelist.map((game) => (
        <div key={game.name} className={style.catcard1}>
          <Imag url={game.img} />
          <div className={style.catcard2}>
            <p>{game.name}</p>
            <><Dispo booked={game.booked} bid={game.id} /></>
            <p>{game.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
