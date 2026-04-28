import type { StatusTone } from '../components/ui/StatusBadge'

export type DashboardMetric = {
  label: string
  value: string
  change: string
  tone: StatusTone
}

export type DepartmentLoad = {
  department: string
  capacity: string
  queue: string
  status: string
  tone?: StatusTone
}

export type SystemPulse = {
  label: string
  value: string
}

export type DashboardData = {
  metrics: DashboardMetric[]
  departmentLoad: DepartmentLoad[]
  systemPulse: SystemPulse[]
}

export type Doctor = {
  id: string
  name: string
  department: string
  schedule: string
  status: string
  tone?: StatusTone
}

export type CommunicationThread = {
  id: string
  name: string
  meta: string
  status: string
  tone?: StatusTone
}

export type CommunicationMessage = {
  id: string
  sender: string
  body: string
  time: string
}

export type CommunicationData = {
  metric: string
  threads: CommunicationThread[]
  messages: CommunicationMessage[]
}
