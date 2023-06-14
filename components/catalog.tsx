// Table Client Component
 
"use client";
import React from 'react';
import { seed } from '@/lib/seed';
import Image from 'next/image';
import style from '@/app/page.module.css';
import useSWR from 'swr';

import { PrismaClient } from '@prisma/client'


 function Imag({ url }: { url: string }) {
  if (url === '') {
    return <div></div>;
  } else {
    return <Image alt="" src={url} height={100} />;
  }
}

async function fetcher(url : string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return response.json();
}

function Dispo({ booked, bid }: { booked: boolean; bid: number }) {
  const queryParams = {
    id: bid.toString(),
  };

  const url = `/api/bookbutt?${new URLSearchParams(queryParams).toString()}`;

  const handleClick = async () => {
    if (booked) return;
    try {
      await fetch(url, { method: 'POST' });
      // Handle successful booking
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      {booked ? (
        <button type="button" disabled>
          Already booked
        </button>
      ) : (
        <button type="button" onClick={handleClick}>
          Book
        </button>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const prop = await prisma.games.findMany()

  return {
    props: prop,
  };
}

export default async function Catalog({prop}) { 
  
  const gamelist = await prop;
  return (
    <div className={style.catdiv}>
      <p className={style.bigtxt}>Catalog</p>
      {gamelist.map((game: any) => (
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
