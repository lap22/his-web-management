import type { CommunicationData, DashboardData, Doctor } from '../types/his'

export const dashboardMock: DashboardData = {
  metrics: [
    { label: 'Active patients', value: '1,284', change: '+8.2%', tone: 'info' },
    { label: 'Doctors on duty', value: '46', change: '12 depts', tone: 'success' },
    { label: 'Queue wait', value: '18m', change: '-4m', tone: 'success' },
    { label: 'Critical alerts', value: '7', change: 'Review', tone: 'warning' },
  ],
  departmentLoad: [
    { department: 'Emergency', capacity: '94%', queue: '12 waiting', status: 'Stable' },
    { department: 'Cardiology', capacity: '81%', queue: '6 waiting', status: 'High load', tone: 'warning' },
    { department: 'Radiology', capacity: '68%', queue: '3 waiting', status: 'Stable' },
    { department: 'Pediatrics', capacity: '73%', queue: '5 waiting', status: 'Stable' },
  ],
  systemPulse: [
    { label: 'API latency', value: '124ms' },
    { label: 'Message backlog', value: '31' },
    { label: 'Sync health', value: '99.9%' },
  ],
}

export const doctorsMock: Doctor[] = [
  { id: 'DR-204', name: 'Dr. An Nguyen', department: 'Cardiology', schedule: '08:00-16:00', status: 'Available' },
  { id: 'DR-118', name: 'Dr. Hoa Tran', department: 'Emergency', schedule: 'On call', status: 'High load', tone: 'warning' },
  { id: 'DR-331', name: 'Dr. Quang Le', department: 'Radiology', schedule: '10:00-18:00', status: 'Available' },
  { id: 'DR-427', name: 'Dr. Binh Pham', department: 'Pediatrics', schedule: '12:00-20:00', status: 'Escalated', tone: 'error' },
]

export const patientCommunicationMock: CommunicationData = {
  metric: '12 pending',
  threads: [
    { id: 'patient-1', name: 'Minh Nguyen', meta: 'Follow-up after cardiology consult', status: 'Waiting', tone: 'warning' },
    { id: 'patient-2', name: 'Lan Tran', meta: 'Appointment confirmation', status: 'Open' },
    { id: 'patient-3', name: 'Mai Le', meta: 'Lab result question', status: 'Open' },
    { id: 'patient-4', name: 'Hoang Pham', meta: 'Urgent discharge note', status: 'Urgent', tone: 'error' },
  ],
  messages: [
    {
      id: 'patient-message-1',
      sender: 'Care Coordinator',
      body: 'Please confirm the follow-up appointment and medication pickup window for tomorrow morning.',
      time: '09:12',
    },
    {
      id: 'patient-message-2',
      sender: 'Minh Nguyen',
      body: 'Confirmed. I will arrive before 08:30 and bring the latest blood pressure log.',
      time: '09:18',
    },
    {
      id: 'patient-message-3',
      sender: 'Care Coordinator',
      body: 'Thank you. The cardiology team has been notified and your check-in packet is ready.',
      time: '09:21',
    },
  ],
}

export const doctorCommunicationMock: CommunicationData = {
  metric: '3 urgent',
  threads: [
    { id: 'doctor-1', name: 'Emergency Team', meta: 'Bed capacity and escalation routing', status: 'Urgent', tone: 'error' },
    { id: 'doctor-2', name: 'Cardiology Unit', meta: 'Pre-op clearance notes', status: 'Open' },
    { id: 'doctor-3', name: 'Radiology Desk', meta: 'MRI attachment review', status: 'Waiting', tone: 'warning' },
    { id: 'doctor-4', name: 'Pediatrics Lead', meta: 'Shift handoff summary', status: 'Open' },
  ],
  messages: [
    {
      id: 'doctor-message-1',
      sender: 'Dr. Hoa Tran',
      body: 'Emergency has two high-risk arrivals. Please reroute one imaging slot and notify ICU intake.',
      time: '10:04',
    },
    {
      id: 'doctor-message-2',
      sender: 'Operations Admin',
      body: 'ICU intake has been notified. Radiology slot at 10:45 is reserved for emergency review.',
      time: '10:08',
    },
    {
      id: 'doctor-message-3',
      sender: 'Dr. Quang Le',
      body: 'Attachment received. I will prioritize the scan and publish findings to the thread.',
      time: '10:11',
    },
  ],
}
