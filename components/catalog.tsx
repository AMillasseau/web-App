import { sql } from '@vercel/postgres'
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import { seed } from '@/lib/seed'

import style from '@/app/page.module.css'

function imag(url: string) {
  if (url == ''){
    return (<div> </div>)}
  else {
    return (<Image alt='' src={url} height={100}/>)}
}

function dispo(d: boolean) {
  if (d) {
    return (<p> Already Booked </p>)}
  else {return(<p> Available </p>)}
}

export default async function Table() {
  let data

  try {
    data = await sql`SELECT * FROM games`
  } catch (e: any) {
    if (e.message === `relation "games" does not exist`) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()
      data = await sql`SELECT * FROM games`
    } else {
      throw e
    }
  }

  const { rows: games } = data
 
  return (      
    <div className={style.catdiv}>
      <p className={style.bigtxt}> Catalog  </p>
        {games.map((game) => (
          <div key={game.name} className={style.catcard1}>
              {imag(game.img)}
            <div className={style.catcard2}>
            <a href={"/game/"+game.name}> {game.name} </a>
              {dispo(game.booked)}
            </div> 
          </div> 
          )
        )}
    </div>
  )
}
