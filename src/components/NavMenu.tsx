import BackButton from '../components/BackButton'
import { motion } from "framer-motion"
import { useState } from 'react'
import { Modal } from './Modal'
import { ShowCodeModal } from './ShowCodeModal'
import { Code, Question, X } from 'phosphor-react'
import { CodePreview } from './CodePreview'

interface NavMenuProps {
  challengeName: string
}

const NavMenu = ({ children, challengeHeaderContent, challengeName, rawCodeHeader }: any) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [codeOpen, setCodeOpen] = useState(false)

  const closeModal = () => setModalOpen(false)
  const openModal = () => setModalOpen(true)
  const closeCode = () => setCodeOpen(false)
  const openCode = () => setCodeOpen(true)

  return (
    <>
      <div className='flex gap-2 mt-4 ml-4 z-20 fixed'>
        <BackButton modalOpen={modalOpen} codeOpen={codeOpen} />

        <motion.button
          onClick={() => (modalOpen ? closeModal() : openModal())}
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
        <ShowCodeModal>
          <CodePreview rawCodeHeader={rawCodeHeader}>
            {children}
          </CodePreview>
        </ShowCodeModal>
        : null
      }

      {modalOpen
        ?
        <Modal>
          <header className='py-2 px-4 z-20 absolute left-10 top-12 pointer-events-none'>
            <h3 className='font-bold text-3xl mb-2'>{challengeName}</h3>
            {challengeHeaderContent}
          </header>
        </Modal>
        : null
      }
    </>
  )
}

export default NavMenu
