// Table Client Component

import React from 'react';
import { sql } from '@vercel/postgres';
import { seed } from '@/lib/seed';
import Image from 'next/image';
import style from '@/app/page.module.css';

function Imag({ url }: { url: string }) {
  if (url === '') {
    return <div></div>;
  } else {
    return <Image alt="" src={url} height={100} />;
  }
}

function Dispo({ booked, name }: { booked: boolean; name: string }) {
  const handleBooking = async () => {
    let data;
    let query = sql`UPDATE games SET booked = true WHERE name = ${name}`;
    try {
      data = await query;
    } catch (e: any) {
      if (e.message === `relation "games" does not exist`) {
        console.log(
          'Table does not exist, creating and seeding it with dummy data now...'
        );
        // Table is not created yet
        await seed();
        data = await query;
      } else {
        throw e;
      }
    }
  };

  if (booked) {
    return <button type="button" disabled>Already booked</button>;
  } else {
    return <button type="button" onClick={handleBooking}>Book</button>;
  }
}

export default function Table() {
   
      let data;

      try {
        data = await sql`SELECT * FROM games`;
      } catch (e: any) {
        if (e.message === `relation "games" does not exist`) {
          console.log(
            'Table does not exist, creating and seeding it with dummy data now...'
          );
          // Table is not created yet
          await seed();
          data = await sql`SELECT * FROM games`;
        } else {
          throw e;
        }
      }

      const { rows: games } = data;
      
    


  return (
    <div className={style.catdiv}>
      <p className={style.bigtxt}>Catalog</p>
      {games.map((game: any) => (
        <div key={game.name} className={style.catcard1}>
          <Imag url={game.img} />
          <div className={style.catcard2}>
            <p>{game.name}</p>
            <Dispo booked={game.booked} name={game.name} />
            <p>{game.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
