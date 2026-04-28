import React from 'react'
import type { IconName } from '../../config/navigation'
import Icon from './Icon'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

type ButtonProps = {
  children: React.ReactNode
  icon?: IconName
  variant?: ButtonVariant
}

export default function Button({ children, icon, variant = 'primary' }: ButtonProps) {
  return (
    <button className={`btn btn-${variant}`} type="button">
      {icon ? <Icon name={icon} /> : null}
      {children}
    </button>
  )
}
