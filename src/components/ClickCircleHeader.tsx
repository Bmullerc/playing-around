import React from 'react'

export const ClickCircleHeader = () => {
  return (
    <header className='py-2 px-4 z-20 absolute left-10 top-12 pointer-events-none'>
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
  )
}
