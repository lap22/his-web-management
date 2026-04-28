import React from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

type AppShellProps = {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="app">
      <Sidebar />
      <div className="app-shell">
        <TopBar />
        <main className="content">{children}</main>
      </div>
    </div>
  )
}
