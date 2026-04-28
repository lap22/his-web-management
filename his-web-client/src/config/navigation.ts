export type IconName =
  | 'arrow'
  | 'bell'
  | 'chevron'
  | 'clipboard'
  | 'export'
  | 'filter'
  | 'grid'
  | 'help'
  | 'inbox'
  | 'logout'
  | 'message'
  | 'plus'
  | 'search'
  | 'stethoscope'

export type NavItem = {
  label: string
  to: string
  icon: IconName
}

export const navigation: NavItem[] = [
  { label: 'Dashboard', to: '/', icon: 'grid' },
  { label: 'Doctor Management', to: '/doctors', icon: 'stethoscope' },
  { label: 'Patient Communication', to: '/patient-communication', icon: 'message' },
  { label: 'Doctor Communication', to: '/doctor-communication', icon: 'inbox' },
]

export const utilities: NavItem[] = [
  { label: 'Help Center', to: '/help', icon: 'help' },
  { label: 'Audit Log', to: '/audit-log', icon: 'clipboard' },
  { label: 'Sign Out', to: '/sign-out', icon: 'logout' },
]
