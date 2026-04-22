import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div style={{ padding: '2.5rem' }}>
      {children}
    </div>
  )
}