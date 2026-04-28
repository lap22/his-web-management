import React from 'react'
import type { StatusTone } from './StatusBadge'

type MetricCardProps = {
  label: string
  value: string
  change: string
  tone?: StatusTone
}

export default function MetricCard({ label, value, change, tone = 'info' }: MetricCardProps) {
  return (
    <article className="metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <em className={tone}>{change}</em>
    </article>
  )
}
