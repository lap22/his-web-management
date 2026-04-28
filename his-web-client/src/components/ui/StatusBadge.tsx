import React from 'react'

export type StatusTone = 'info' | 'success' | 'warning' | 'error'

type StatusBadgeProps = {
  children: React.ReactNode
  tone?: StatusTone
}

export default function StatusBadge({ children, tone = 'info' }: StatusBadgeProps) {
  return <span className={`status-badge ${tone}`}>{children}</span>
}
