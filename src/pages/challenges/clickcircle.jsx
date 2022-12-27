import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [list, setList] = useState([])
  const [deleted, setDeleted] = useState([])
  const [color, setColor] = useState("#323232")

  const handleClick = (event) => {
    const newClick = {
      clientX: event.clientX,
      clientY: event.clientY
    }
    setList((prev) => [...prev, newClick])
  }

  const handleUndo = (event) => {
    event.stopPropagation()

    if (list.length === 0) return

    const deletedCircle = [...list].pop()

    setList((prev) => {
      const newList = [...prev].slice(0, -1)
      return newList
    })

    setDeleted((prev) => [...prev, deletedCircle])
  }

  const handleRedo = (event) => {
    event.stopPropagation()

    if (deleted.length === 0) return

    const redoneCircle = [...deleted].pop()

    setDeleted((prev) => {
      const newList = [...prev].slice(0, -1)
      return newList
    })

    setList((prev) => [...prev, redoneCircle])
  }

  const handleChangeColor = (event) => {
    setColor(event.target.value)

    console.log('batata')
  }

  return (
    <>
      <Head>
        <title>Click Circle Challenge</title>
        <meta name="description" content="Click Circle Front-end Interview Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className='py-2 px-4 z-20 fixed pointer-events-none'>
          <h3 className='font-bold text-3xl mb-2'>Click Circle Challenge</h3>
          <ul className='list-inside list-disc flex flex-col gap-1 marker:text-zinc-700'>
            <h4 className='font-medium text-xl'>Create an app that can:</h4>
            <li>Be clicked anywhere inside the page</li>
            <li>Must render a circle in the clicked position</li>
            <li>With every click, the previous circles must be kept, and a new one should be rendered</li>
            <li>Create two functionalities:
              <ul className='list-inside list-disc px-4 marker:text-zinc-400'>
                <li>Undo</li>
                <li>Redo</li>
              </ul>
            </li>
          </ul>
        </header>

        <section
          onClick={handleClick}
          className='bg-zinc-300 h-full w-full fixed top-0'>
          <div
            className='fixed justify-center items-center top-4 w-full z-10 flex gap-2 font-bold text-zinc-100'>
            <button
              disabled={list.length === 0}
              onClick={handleUndo}
              className="bg-red-500 py-2 px-3 rounded-md disabled:grayscale hover:opacity-70 hover:scale-95 duration-200 ease-in-out disabled:cursor-not-allowed disabled:hover:scale-100">Undo
            </button>
            <button
              disabled={deleted.length === 0}
              onClick={handleRedo}
              className="bg-green-500 py-2 px-3 rounded-md disabled:grayscale hover:opacity-70 hover:scale-95 duration-200 ease-in-out disabled:cursor-not-allowed disabled:hover:scale-100">Redo
            </button>
            <form className='flex justify-center items-center gap-2 rounded-md py-2 px-3 bottom-8 right-8 fixed cursor-pointer hover:scale-95 ease-in-out' style={{backgroundColor: color}} onClick={(e) => e.stopPropagation()}>
              <label for="color" className='invert' style={{color: color}}>Change Color</label>
              <input id="color" type="color" className='hidden' onChange={handleChangeColor} value={color}/>
            </form>
          </div>
          {list.map((item, index) => (
            <span key={index} className="w-6 h-6 rounded-full absolute" style={{ left: item.clientX, top: item.clientY, backgroundColor: color}} />
          ))}
        </section>
      </main >
      <footer className='fixed bottom-2 left-0 right-0 text-center pointer-events-none'>
        <h4 className='text-sm'>Challenge from <Link href={"https://www.youtube.com/@fernandev1"} className="hover:text-zinc-400 duration-200 pointer-events-auto">@fernandev1</Link></h4>
      </footer>
    </>
  )
}
