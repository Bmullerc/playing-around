import { ReactElement } from "react"
import { motion } from "framer-motion"

interface ShowCodeProps {
  handleClose: () => void
  children?: ReactElement
  codeOpen?: true | false
}

export function ShowCode({ handleClose, children, ...rest }: ShowCodeProps) {

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: .1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      }
    },
    exit: {
      y: "90%",
      opacity: 0
    },
  }

  return (
    <div onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        {...rest}
        className="absolute w-full rounded-3xl flex flex-col items-center justify-center z-20"
      >
        {children}
      </motion.div>
    </div>
  )
}