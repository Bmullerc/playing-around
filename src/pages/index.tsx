import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Front-end Challenges</title>
        <meta name="description" content="A Collection of Front-end Challenges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <h2 className='font-bold text-5xl'>Front-end Challenge Solving</h2>
          <Link href="/challenges">Challenges</Link>
        </header>
      </main>
    </>
  )
}
