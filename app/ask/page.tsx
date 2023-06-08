import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Requester from '@/components/requester'


import style from 'app/page.module.css'

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

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
        
        <Suspense fallback={<p> Loading <p />}>
        {/* @ts-expect-error Async Server Component */}
        <Requester />
        </Suspense>
        
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
