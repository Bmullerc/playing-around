import React, { ReactElement } from 'react'

interface ChallengeHeaderProps {
  name: string
  children: ReactElement
}

export const ChallengeHeader = ({name, children}: ChallengeHeaderProps) => {
  return (
    <header className='py-2 px-4 z-20 absolute left-10 top-12 pointer-events-none'>
      <h3 className='font-bold text-3xl mb-2'>{name}</h3>
      {children}
    </header>
  )
}
