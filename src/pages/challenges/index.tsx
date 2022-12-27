import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>React Interview Challenges</title>
        <meta name="description" content="React interview Challenges" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <div className='font-bold text-4xl'>
            Front-end Developer Junior
          </div>
          <p>Here are some proposed challenges:</p>
          <ol className='list-inside list-decimal'>
            <li><Link href="/challenges/clickcircle">Click Circle Render</Link></li>
            <li><Link href="/challenges/stoplight">Stoplight</Link></li>
          </ol>
        </header>
      </main>
    </>
  )
}