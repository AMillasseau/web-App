import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Ligne from '@/components/ligne'

import style from './page.module.css'

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Home() {
return (<Suspense fallback={<div> Loading </div>}>
        {/* @ts-expect-error Async Server Component */}
        <Ligne />
        </Suspense>
       )
