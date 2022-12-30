import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowCircleLeft } from "phosphor-react"

interface BackButtonProps {
  modalOpen?: true | false
  codeOpen?: true | false
}

const BackButton = ({modalOpen, codeOpen, ...rest }: BackButtonProps) => {
  return (
    <motion.button
      disabled={modalOpen === true || codeOpen === true}
      whileTap={{ scale: .9, rotate: -360 }}
      whileHover={{ scale: 1.2, rotate: 360 }}
      className="duration-100 bg-zinc-700 rounded-full py-1 px-1 disabled:opacity-0"
      {...rest}
    >
      <Link href="/challenges"><ArrowCircleLeft size={24} weight="bold" className="text-zinc-100" /></Link>
    </motion.button>
  )
}

export default BackButton
