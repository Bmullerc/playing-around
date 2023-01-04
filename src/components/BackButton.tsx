import { motion } from "framer-motion"
import { ArrowCircleLeft } from "phosphor-react"
import { useRouter } from 'next/router'

interface BackButtonProps {
  modalOpen?: true | false
  codeOpen?: true | false
  className?: string
}

const BackButton = ({ modalOpen, codeOpen, className, ...rest }: BackButtonProps) => {
  const router = useRouter()

  return (
    <motion.button
      disabled={modalOpen === true || codeOpen === true}
      whileTap={{ scale: .9, rotate: -360 }}
      whileHover={{ scale: 1.2, rotate: 360 }}
      onClick={() => router.back()}
      className={`duration-100 bg-zinc-900 rounded-full py-1 px-1 disabled:opacity-0 ${className}`}
      {...rest}
    >
      <ArrowCircleLeft size={24} weight="bold" className="text-zinc-100" />
    </motion.button>
  )
}

export default BackButton
