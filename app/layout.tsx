
import { Secular_One } from 'next/font/google'

const font1 = Secular_One({ 
  subsets : ['latin'],
  weight : '400',
})

export const metadata = {
  title: 'Arena',
  description: 'Arena\'s website',
  author: 'Adrien Millasseau',
  viewport: 'width=device-width, initial-scale=1.0',
}

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font1.variable}>{children}</body>
    </html>
  )
}
