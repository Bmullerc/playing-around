interface CodePreviewProps {
  children: string
  rawCodeHeader: string
  hasBG?: boolean
}


export const CodePreview = ({ children, rawCodeHeader, hasBG }: CodePreviewProps) => {
  return (
    <aside className={`${hasBG ? "bg-zinc-50 rounded-lg" : null} py-2 px-4 z-20 absolute left-10 top-14 pointer-events-none`}>
      <h3 className='font-bold text-3xl mb-2'>{rawCodeHeader} Raw Code (no stylization)</h3>
      <pre>
        <code>
          {children}
        </code>
      </pre>
    </aside>
  )
}
