import BackButton from '../components/BackButton'
import { motion } from "framer-motion"
import { ReactElement, useEffect, useState } from 'react'
import { Modal } from './Modal'
import { ShowCodeModal } from './ShowCodeModal'
import { Code, Question, X } from 'phosphor-react'
import { CodePreview } from './CodePreview'

interface NavMenuProps {
  children: string
  challengeHeaderContent: ReactElement
  challengeName: string
  rawCodeHeader: string
  hasBG?: boolean
}

const NavMenu = ({ children, challengeHeaderContent, challengeName, rawCodeHeader, hasBG }: NavMenuProps) => {
  const [modalOpen, setModalOpen] = useState(true)
  const [codeOpen, setCodeOpen] = useState(false)

  const closeModal = () => setModalOpen(false)
  const openModal = () => setModalOpen(true)
  const closeCode = () => setCodeOpen(false)
  const openCode = () => setCodeOpen(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='flex gap-2 mt-4 ml-4 z-20 fixed'>
        <BackButton modalOpen={modalOpen} codeOpen={codeOpen} />

        <motion.button
          onClick={() => (modalOpen ? closeModal() : openModal())}
          disabled={codeOpen}
          whileTap={{ scale: .9, rotate: -180 }}
          whileHover={{ scale: 1.2, rotate: 180 }}
          className="duration-75 bg-zinc-900 rounded-full py-1 px-1 disabled:opacity-0"
        >
          {modalOpen ? <X size={24} weight="bold" className="text-zinc-100" /> : <Question size={24} weight="bold" className="text-zinc-100" />}
        </motion.button>

        <motion.button
          onClick={() => (codeOpen ? closeCode() : openCode())}
          disabled={modalOpen}
          whileTap={{ scale: .9, rotate: -180 }}
          whileHover={{ scale: 1.2, rotate: 180 }}
          className="duration-75 bg-zinc-900 rounded-full py-1 px-1 disabled:opacity-0"
        >
          {codeOpen ? <X size={24} weight="bold" className="text-zinc-100" /> : <Code size={24} weight="bold" className="text-zinc-100" />}
        </motion.button>
      </div>

      {codeOpen
        ?
        <ShowCodeModal>
          <CodePreview rawCodeHeader={rawCodeHeader} hasBG={hasBG}>
            {children}
          </CodePreview>
        </ShowCodeModal>
        : null
      }

      {modalOpen
        ?
        <Modal>
          <header className={`${hasBG ? "bg-zinc-50 rounded-lg" : null} bg-opacity-95 py-2 px-4 z-20 absolute left-10 top-14 pointer-events-none`}>
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
