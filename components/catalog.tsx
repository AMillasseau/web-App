// Table Client Component
 
"use client";
import React from 'react';
import { seed } from '@/lib/seed';
import Image from 'next/image';
import style from '@/app/page.module.css';
import useSWR from 'swr';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

 function Imag({ url }: { url: string }) {
  if (url === '') {
    return <div></div>;
  } else {
    return <Image alt="" src={url} height={100} />;
  }
}

function Dispo({ booked, bid }: { booked: boolean; bid: number }) {
  async function useHandler() {
    const queryParams = {
    id: bid,
  };
    const { data, error } = useSWR('/api/bookbutt?${new URLSearchParams(queryParams).toString()}', fetch)
  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading </div>
  }

  if (booked) {
    return <button type="button" disabled>Already booked</button>;
  } else {
    return (
      <div>
        <button type="button" onClick={useHandler()}>Book</button>
      </div>
    );
  }
}

export default async function Catalog() { 
   const connectionString = "Server=ep-proud-field-232095-pooler.us-east-1.postgres.vercel-storage.com;Database=verceldb;User Id=default;Password=oTM3KYNDsWk5;";
  
 const { data, error } = useSWR('/api/games', fetch)
  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading </div>
 const gamelist = data.gamelist;
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
