import { useState } from 'react'

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
          className={`${litColor === color.red ? color.red : "opacity-30"} bg-red-700 h-14 w-14 rounded-full cursor-pointer`}></span>
        <span
          onClick={() => setLitColor(color.yellow)}
          className={`${litColor === color.yellow ? color.yellow : "opacity-30"} bg-yellow-400 h-14 w-14 rounded-full cursor-pointer`}></span>
        <span
          onClick={() => setLitColor(color.green)}
          className={`${litColor === color.green ? color.green : "opacity-30"} bg-green-500 h-14 w-14 rounded-full cursor-pointer`}></span>
      </div>
    </section>
  )
}
