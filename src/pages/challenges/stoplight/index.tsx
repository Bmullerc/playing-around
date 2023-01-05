import Head from 'next/head'
import { useState } from 'react'
import Footer from '../../../components/Footer'
import NavMenu from '../../../components/NavMenu'

export default function StoplightChallenge() {
  const color = {
    red: "rgb(248 10 43)",
    yellow: "rgb(250 204 21)",
    green: "rgb(34 197 94)",
  }

  const [litColor, setLitColor] = useState("")

  const rawStoplightCode = `import { useState } from 'react'

export function StoplightChallengeCode() {
  const color = {
    red: "rgb(248 10 43)",
    yellow: "rgb(250 204 21)",
    green: "rgb(34 197 94)",
  }

  const [litColor, setLitColor] = useState("")

  return (
    <section>
      <div>
        <span
          onClick={() => setLitColor(color.red)}
          className={litColor === color.red ? color.red : "opacity-30"}></span>
        <span
          onClick={() => setLitColor(color.yellow)}
          className={litColor === color.yellow ? color.yellow : "opacity-30"}></span>
        <span
          onClick={() => setLitColor(color.green)}
          className={litColor === color.green ? color.green : "opacity-30"}></span>
      </div>
    </section>
  )
}`

  return (
    <>
      <Head>
        <title>Stoplight Challenge</title>
        <meta name="description" content="Stoplight Front-end Interview Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-zinc-300 w-screen h-screen'>
        <NavMenu
          challengeName='Stoplight Challenge'
          rawCodeHeader={`Stoplight Challenge`}
          challengeHeaderContent={
            <ul className='list-inside list-disc flex flex-col gap-1 marker:text-zinc-700'>
              <h4 className='font-medium text-xl'>Create a transit stoplight that can:</h4>
              <li>Have only one light lit at a time</li>
              <li>Can toggle between lights using a toggle</li>
              <li>The operator can choose which light will be lit</li>
              {/* <li>Questioning:
                <ul className='list-inside list-decimal px-4 marker:text-zinc-400'>
                  <li>If the system receives more lights, how would the implementation happen?</li>
                  <li>If you were asked to change the color scheme, how would you do it?</li>
                  <li>If you had to think about accessibility, how would you go about it?</li>
                </ul>
              </li> */}
            </ul>
          }
        >
          {rawStoplightCode}
        </NavMenu>

        <section>
          <div className='bg-zinc-800 rounded-md py-6 px-4 h-fit w-fit absolute flex flex-col gap-3 items-center justify-center top-0 bottom-0 m-auto left-0 right-0 z-10'>
            <span
              onClick={() => setLitColor(color.red)}
              className={`${litColor === color.red ? color.red : "opacity-30"} bg-red-700 h-14 w-14 rounded-full cursor-pointer`}></span>
            <span
              onClick={() => setLitColor(color.yellow)}
              className={`${litColor === color.yellow ? color.yellow : "opacity-30"} bg-yellow-400 h-14 w-14 rounded-full cursor-pointer`}></span>
            <span
              onClick={() => setLitColor(color.green)}
              className={`${litColor === color.green ? color.green : "opacity-30"} bg-green-500 h-14 w-14 rounded-full cursor-pointer`}></span>
          </div>
          <div className='bg-zinc-700 w-4 h-[calc(50%-5rem)] absolute bottom-0 m-auto left-0 right-0'></div>
          <div className='bg-zinc-800 w-10 h-4 absolute bottom-0 m-auto left-0 right-0'></div>

        </section>

      </main>

      <Footer
        authorName='Fredes'
        linkFrom='https://www.youtube.com/watch?v=-VwI5neksk0'
        style={{ top: 4 }}
      />
    </>
  )
}
