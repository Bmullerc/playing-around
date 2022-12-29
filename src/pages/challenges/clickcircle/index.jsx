import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Modal } from '../../../components/Modal'
import { ClickCircleHeader } from './header'
import { Code, Question, X } from "phosphor-react"
import { motion } from "framer-motion"
import { ShowCode } from '../../../components/ShowCode'
import { ShowCircleChallengeCode } from './code'

export default function Home() {
  const [list, setList] = useState([])
  const [deleted, setDeleted] = useState([])
  const [color, setColor] = useState("#323232")
  const [modalOpen, setModalOpen] = useState(false)
  const [codeOpen, setCodeOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  const closeCode = () => setCodeOpen(false)
  const openCode = () => setCodeOpen(true)

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
        <div className='flex gap-2 mt-4 ml-4 z-20 fixed'>
          <motion.button
            onClick={() => (modalOpen ? close() : open())}
            disabled={codeOpen}
            whileTap={{ scale: .9, rotate: -180 }}
            whileHover={{ scale: 1.2, rotate: 180 }}
            className="duration-75 bg-zinc-700 rounded-full py-1 px-1 disabled:opacity-0"
          >
            {modalOpen ? <X size={24} weight="bold" className="text-zinc-100" /> : <Question size={24} weight="bold" className="text-zinc-100" />}
          </motion.button>

          <motion.button
            onClick={() => (codeOpen ? closeCode() : openCode())}
            disabled={modalOpen}
            whileTap={{ scale: .9, rotate: -180 }}
            whileHover={{ scale: 1.2, rotate: 180 }}
            className="duration-75 bg-zinc-700 rounded-full py-1 px-1 disabled:opacity-0"
          >
            {codeOpen ? <X size={24} weight="bold" className="text-zinc-100" /> : <Code size={24} weight="bold" className="text-zinc-100" />}
          </motion.button>
        </div>
        {codeOpen
          ?
          <ShowCode handleClose={close}>
            <ShowCircleChallengeCode />
          </ShowCode>
          : null
        }

        {modalOpen
          ?
          <Modal handleClose={close}>
            <ClickCircleHeader />
          </Modal>
          : null
        }

        {modalOpen & codeOpen ? close() & closeCode() : null}

        <section
          onClick={handleClick}
          className='bg-zinc-300 h-full w-full fixed top-0'>
          <div
            className='fixed justify-center items-center top-4 w-full z-10 flex gap-2 font-bold text-zinc-100'>
            <button
              disabled={list.length === 0}
              onClick={handleUndo}
              className="bg-red-500 py-2 px-3 rounded-md disabled:grayscale hover:opacity-70 hover:scale-95 duration-200 ease-in-out disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:opacity-100">Undo
            </button>
            <button
              disabled={deleted.length === 0}
              onClick={handleRedo}
              className="bg-green-500 py-2 px-3 rounded-md disabled:grayscale hover:opacity-70 hover:scale-95 duration-200 ease-in-out disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:opacity-100">Redo
            </button>
            <form className='flex justify-center items-center gap-2 rounded-md py-2 px-3 bottom-8 right-8 fixed cursor-pointer hover:scale-95 ease-in-out duration-200' style={{ backgroundColor: color }} onClick={(e) => e.stopPropagation()}>
              <label htmlFor='color' className='invert cursor-pointer' style={{ color: color }}>Change Color</label>
              <input id="color" type="color" className='hidden' onChange={handleChangeColor} value={color} />
            </form>
          </div>
          {list.map((item, index) => (
            <span key={index} className="w-6 h-6 rounded-full absolute" style={{ left: item.clientX - 10, top: item.clientY - 10, backgroundColor: color }} />
          ))}
        </section>
      </main >
      <footer className='fixed bottom-2 left-0 right-0 text-center pointer-events-none'>
        <h4 className='text-sm'>Challenge from <Link href={"https://www.youtube.com/@fernandev1"} className="hover:text-zinc-400 duration-200 pointer-events-auto" style={{ color: color }}>@fernandev1</Link></h4>
      </footer>
    </>
  )
}
