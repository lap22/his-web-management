import React from 'react'
import type { IconName } from '../../config/navigation'

type IconProps = {
  name: IconName
}

export default function Icon({ name }: IconProps) {
  return <span className={`icon icon-${name}`} aria-hidden="true" />
}
