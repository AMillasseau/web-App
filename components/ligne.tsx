import { sql } from '@vercel/postgres'
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import RefreshButton from './refresh-button'
import { seed } from '@/lib/seed'

import style from 'app/pages.modules.css'

export default async function Ligne() {
      function send(str) {
      try {
    data = await sqlstr
  } catch (e: any) {
    if (e.message === `relation "games" does not exist`) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
    } else {
      throw e
    }
  }}
    return (
    <div>
    <textarea id='in'></textarea>
    <button onclick='send(document.getElementById(id).innerHTML)'/>
    </div>)}
