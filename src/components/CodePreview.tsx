interface CodePreviewProps {
  children: string
  rawCodeHeader: string
}


export const CodePreview = ({ children, rawCodeHeader }: CodePreviewProps) => {
  return (
    <aside className='py-2 px-4 z-20 absolute left-10 top-12 pointer-events-none'>
      <h3 className='font-bold text-3xl mb-2'>{rawCodeHeader}</h3>
      <pre>
        <code>
          {children}
        </code>
      </pre>
    </aside>
  )
}
