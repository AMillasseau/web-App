// Table Client Component
 
"use client";
import React from 'react';
import { sql } from '@vercel/postgres';
import { seed } from '@/lib/seed';
import Image from 'next/image';
import style from '@/app/page.module.css';

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
  async function handler() {
    const user = await prisma.games.findUnique({ where: { id: bid } });
    if (user !== null) {
      user.booked = true;
      const updatedUser = await prisma.games.update({
        where: { id: user.id },
        data: { name: user.name },
      });
    }
  }

  if (booked) {
    return <button type="button" disabled>Already booked</button>;
  } else {
    return (
      <div>
        <button type="button" onClick={handler}>Book</button>
      </div>
    );
  }
}

export default async function Catalog() { 
   const connectionString = "Server=ep-proud-field-232095-pooler.us-east-1.postgres.vercel-storage.com;Database=verceldb;User Id=default;Password=oTM3KYNDsWk5;";
      let data;

      const gamelist = await prisma.games.findMany();
 
  return (
    <div className={style.catdiv}>
      <p className={style.bigtxt}>Catalog</p>
      {gamelist.map((game: any) => (
        <div key={game.name} className={style.catcard1}>
          <Imag url={game.img} />
          <div className={style.catcard2}>
            <p>{game.name}</p>
            <><Dispo booked={game.booked} name={game.id} /></>
            <p>{game.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
