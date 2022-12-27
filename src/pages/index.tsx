import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>React Challenges</title>
        <meta name="description" content="A Collection of Front-end Challenges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <h2 className='font-bold text-5xl'>React Interview Challenges</h2>
          <Link href="/challenges">Challenges</Link>
        </header>
      </main>
    </>
  )
}
