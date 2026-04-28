import React from 'react'

type StateBlockProps = {
  message: string
  title?: string
  tone?: 'loading' | 'error' | 'empty'
}

export default function StateBlock({ message, title, tone = 'loading' }: StateBlockProps) {
  return (
    <div className={`state-block ${tone}`}>
      <strong>{title ?? (tone === 'loading' ? 'Loading data' : 'No data')}</strong>
      <p>{message}</p>
    </div>
  )
}
