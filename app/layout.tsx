import 'app/global.css'
import { Secular_One } from 'next/font/google'

const font1 = Secular_One({ 
  subsets : ['latin'],
  weight : '400',
})

export const metadata = {
  title: 'Vercel Postgres Demo with Prisma',
  description:
    'A simple Next.js app with Vercel Postgres as the database and Prisma as the ORM',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
