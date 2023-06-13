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
  
  if (booked) {
    return <button type="button" disabled>Already booked</button>;
  } else {
    return (<><button type="button" onClick={async () => {
            const user = await prisma.games.findUnique({where: {id: bid,},});
            user.booked = true;
            const updatedUser = await prisma.games.update({where: {id: user.id,},data: {name: user.name,},});
          }}>Book</button></>);
  }
}


export default async function Table() {
   const connectionString = "Server=ep-proud-field-232095-pooler.us-east-1.postgres.vercel-storage.com;Database=verceldb;User Id=default;Password=oTM3KYNDsWk5;";
      let data;

      const users = await prisma.games.findMany();

      const { rows: games } = users;
      
    


  return (
    <div className={style.catdiv}>
      <p className={style.bigtxt}>Catalog</p>
      {games.map((game: any) => (
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
