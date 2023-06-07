import Image from 'next/image'
import Link from 'next/link'

import style from 'app/page.module.css'

export default function Home() {
  return (
    <main className={style.main}>
  
      <div className={style.head}>
        <div className={style.notwide}>
          <p> Website of Arena </p>
          <div className={style.logo}>
            <Image 
              src="/logo.png"
              width={100}
              height={100}
              alt="Arena's logo"
            />
          </div>
        </div>
      </div>

      <div className={style.center}>
        <div className={style.backarrow}>
          <a href="../">
          <Image 
            src="/backarrow.png"
            alt="Back"
            /*className={styles.vercelLogo}*/
            width={80}
            height={70}
            priority
            />
          </a>
        </div>
        <div className={style.longtxt}>
        <p>
          This website was created by Adrien Millasseau.<br/>
          This website has for only purpose a demonstration and nothing on this website can lead to anything other than the modification of the said site. Anything that contradicts this is purely fiction.<br/>
          This website emulate the website of a fictional boardgame asociation where it is possible to consult the news of the asociation and book boardgames to borrow them.
        </p>
        </div>
      </div>

      <div className={style.tail}>
        <div className={style.notwide}>
          <a className={style.a} href="/credits"> Credits </a>
          <p> • </p>
          <a className={style.a} href="/ask"> Ask us </a>
        </div>
      </div>
    
      </main>
    )
}
