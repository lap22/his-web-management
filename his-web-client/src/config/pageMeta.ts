export type PageMeta = {
  title: string
  subtitle: string
  action: string
  search: string
}

export const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: 'Admin Dashboard',
    subtitle: 'Operational overview across care teams, appointments, and system load.',
    action: 'Generate Report',
    search: 'Search patients, doctors, IDs...',
  },
  '/doctors': {
    title: 'Doctor Management',
    subtitle: 'Manage clinician profiles, schedules, availability, and permissions.',
    action: 'Add Doctor',
    search: 'Search doctors, departments...',
  },
  '/patient-communication': {
    title: 'Patient Communication',
    subtitle: 'Coordinate messages, follow-ups, and patient support workflows.',
    action: 'New Message',
    search: 'Search patients or chat history...',
  },
  '/doctor-communication': {
    title: 'Doctor Communication',
    subtitle: 'Route clinical updates, internal notes, and urgent coordination.',
    action: 'New Thread',
    search: 'Search medical records or staff...',
  },
}

export const fallbackPageMeta: PageMeta = {
  title: 'Admin Dashboard',
  subtitle: 'Operational overview across care teams, appointments, and system load.',
  action: 'Generate Report',
  search: 'Search patients, doctors, IDs...',
}
