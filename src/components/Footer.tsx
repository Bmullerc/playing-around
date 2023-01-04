import Link from "next/link";

interface FooterProps {
  linkFrom?: string
  authorName: string
  style?: React.CSSProperties
}

export default function Footer({ linkFrom, authorName, ...rest }: FooterProps) {
  return (
    <footer {...rest} className='fixed bottom-2 left-0 right-0 text-center pointer-events-none'>
      <h4 className='text-sm'>Challenge from {linkFrom ? <Link href={linkFrom} className="hover:text-zinc-400 duration-200 pointer-events-auto" target="_blank">{authorName}</Link> : authorName}</h4>
    </footer>
  )
}