interface PreCodeProps {
  children: string
}

export function PreCode({children}: PreCodeProps) {
  return (
    <pre>
        <code>
          {children}
        </code>
      </pre>
  )
}