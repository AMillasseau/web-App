import { sql } from '@vercel/postgres'
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import RefreshButton from './refresh-button'
import { seed } from '@/lib/seed'

import style from 'app/pages.modules.css'

export default async function Table() {
  let data
  let startTime = Date.now()

  try {
    data = await sql`SELECT * FROM games`
  } catch (e: any) {
    if (e.message === `relation "games" does not exist`) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()
      startTime = Date.now()
      data = await sql`SELECT * FROM games`
    } else {
      throw e
    }
  }

  const { rows: games } = data
  const duration = Date.now() - startTime

  return (
    <div className=
     'display: inherit;
	flex-direction: inherit;
	justify-content: center;
	align-items: center;
	width: 100%;
	'>
      <p> Catalog </p>
        {games.map((games) => (
          <div style='
	box-sizing: border-box;
	width: 100%;
	border: solid #5B6DCD 10px;
	display: inherit;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	margin: 5px 0px;
	bakground: red;
	'>
<img src={games.img} height={100}/>
            <div className='display: inherit;
	              flex-direction: column;
	              justify-content: center;
	              align-items: center;'>
            <p> {games.name}</p>
            <p> Disponibilité </p>
        </div> </div>
        ))}
      </div>
  )
}
