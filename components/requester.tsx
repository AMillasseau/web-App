import { sql } from '@vercel/postgres'
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import { seed } from '@/lib/seed'

export default async function Requester() {
  return <div>Hello, I am a Requester component!</div>;
  /*let data

  function send(name, contact, message){
  let query = sql`INSERT INTO messages (name, contact,message) VALUES (${name},${contact},${message})`
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
  


  return (
    <div>
    <div style={{paddingBottom: '10px'}} className={style.backarrow}>
            <a href="../">
            <Image 
              src="/backarrow.png"
              alt="Back"
              width={30}
              height="auto"
              priority
            />
            </a>
          </div>
          
          <input className={style.ipt} id="name" name="name" type="text" placeholder="Name" autocomplete="off" required/>
          <input className={style.ipt} id="contact" name="contact" type="email" placeholder="Email contact"/>
          <textarea className={style.txta} id="message" name="text" placeholder="Your message" autocomplete="off" rows="12" required></textarea>
          <button className={style.btn} id="btn" onclick="send(document.getElementById('name').value,document.getElementById('contact').value,document.getElementById('message').value)"> Submit </button>
          
    </div>
  )*/
}
