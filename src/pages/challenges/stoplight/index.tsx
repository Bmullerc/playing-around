import Head from 'next/head'
import NavMenu from '../../../components/NavMenu'

export default function StoplightChallenge() {
  return (
    <>
      <Head>
        <title>Stoplight Challenge</title>
        <meta name="description" content="Stoplight Front-end Interview Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavMenu />
        <h3>Stoplight Challenge</h3>
      </main>
    </>
  )
}
