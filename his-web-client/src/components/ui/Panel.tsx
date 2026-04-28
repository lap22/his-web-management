import React from 'react'

type PanelProps = {
  children: React.ReactNode
  span?: 4 | 8 | 12
}

export default function Panel({ children, span = 12 }: PanelProps) {
  return <section className={`panel span-${span}`}>{children}</section>
}

type PanelHeaderProps = {
  eyebrow: string
  title: string
  action?: React.ReactNode
}

export function PanelHeader({ eyebrow, title, action }: PanelHeaderProps) {
  return (
    <div className="panel-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {action}
    </div>
  )
}
