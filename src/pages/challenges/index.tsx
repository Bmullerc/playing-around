import Head from 'next/head'
import Link from 'next/link'
import BackButton from '../../components/BackButton'

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
        <BackButton className="fixed top-4 left-4" />
        <header>
          <section className='bg-zinc-300 h-screen py-20 px-20'>
            <h2 className='font-bold text-4xl mb-4'>Front-end Developer Junior</h2>

            <h6 className='font-medium text-xl mb-2'>Some proposed challenges:</h6>
            <ol className='list-inside list-decimal flex flex-col gap-2 px-4 text-lg marker:font-bold marker:italic marker:text-xl'>
              <li className='hover:text-zinc-200 duration-100'><Link href="/challenges/clickcircle">Click Circle Render</Link></li>
              <li className='hover:text-zinc-200 duration-100'><Link href="/challenges/stoplight">Stoplight</Link></li>
            </ol>
          </section>

        </header>
      </main>
    </>
  )
}
