import { sql } from '@vercel/postgres'
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import { seed } from '@/lib/seed'

import style from '@/app/page.module.css'

function imag(url: string) {
  if (url == ''){
    return (<div> </div>)}
  else {
    return (<Image alt='' src={url} height={150}/>)}
}

async function dispo(d: boolean, name: string) {
  const handleBooking = async () => {
    try {
      await booking(name);
    } catch (error) {
      console.error('Error occurred during booking:', error);
    }
  };

  if (d) {
    return <button type="button" disabled>Already booked</button>;
  } else {
    return (
      <React.Fragment>
        <button type="button" onClick={handleBooking}>Book</button>
      </React.Fragment>
    );
  }
}

async function booking(name: string){
  let data
  let query = sql`UPDATE games SET booked = true WHERE name = ${name}`
  try {
    data = await query
  } catch (e: any) {
    if (e.message === `relation "games" does not exist`) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()
      data = await query
    } else {
      throw e
    }
  }
  }
  

export default async function Table({ name }: { name?: string }) {
  let data
  let query = sql`SELECT * FROM games WHERE name = ${name} LIMIT 1`;
  try {
    data = await query;
  } catch (e: any) {
    if (e.message === `relation "games" does not exist`) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()

      data = await query
    } else {
      throw e
    }
  }

  const { rows: games } = data

  return (      
    <div className={style.descdiv}>
        {games.map((game) => (
        <div key={game.name}>
        <div className={style.deschead}>
          {imag(game.img)}
          <div className={style.catcar2}>
            <p> {game.name} </p>
             {dispo(game.booked, game.name)}
          </div> 
        </div>
        <p> {game.description} </p>
        </div>
          )
        )}
    </div>
  )
}
