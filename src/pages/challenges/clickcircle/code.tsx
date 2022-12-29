import React from 'react'
import { PreCode } from '../../../components/PreCode'


export const ShowCircleChallengeCode = () => {
  return (
    <aside className='py-2 px-4 z-20 absolute left-10 top-12 pointer-events-none'>
      <h3 className='font-bold text-3xl mb-2'>Click Circle Raw Code</h3>
      <PreCode>{`import { useState } from 'react'

export function ClickCircleChallenge() {
  const [list, setList] = useState([])
  const [deleted, setDeleted] = useState([])

  // The Color part is Extra Content, not required by the challenge
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
  }

  return (
    <section onClick={handleClick}>
        <div>
          <button disabled={list.length === 0} onClick={handleUndo}>
            Undo
          </button>

          <button disabled={deleted.length === 0} onClick={handleRedo}>
            Redo
          </button>

          <form style={{ backgroundColor: color }} onClick={(e) => e.stopPropagation()}>
            <label htmlFor='color' style={{ color: color }}>Change Color</label>
            <input id="color" type="color" onChange={handleChangeColor} value={color} />
          </form>
        </div>

        {list.map((item, index) => (
          <span key={index} style={{ left: item.clientX - 10, top: item.clientY - 10, backgroundColor: color }} />
        ))}
    </section>

`}</PreCode>
    </aside>
  )
}
