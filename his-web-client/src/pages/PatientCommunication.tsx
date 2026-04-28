import React from 'react'
import CommunicationWorkspace from '../components/domain/CommunicationWorkspace'

const threads = [
  { name: 'Minh Nguyen', meta: 'Follow-up after cardiology consult', status: 'Waiting', tone: 'warning' as const },
  { name: 'Lan Tran', meta: 'Appointment confirmation', status: 'Open' },
  { name: 'Mai Le', meta: 'Lab result question', status: 'Open' },
  { name: 'Hoang Pham', meta: 'Urgent discharge note', status: 'Urgent', tone: 'error' as const },
]

const messages = [
  {
    sender: 'Care Coordinator',
    body: 'Please confirm the follow-up appointment and medication pickup window for tomorrow morning.',
    time: '09:12',
  },
  {
    sender: 'Minh Nguyen',
    body: 'Confirmed. I will arrive before 08:30 and bring the latest blood pressure log.',
    time: '09:18',
  },
  {
    sender: 'Care Coordinator',
    body: 'Thank you. The cardiology team has been notified and your check-in packet is ready.',
    time: '09:21',
  },
]

export default function PatientCommunication() {
  return (
    <CommunicationWorkspace
      title="Patient Messages"
      metric="12 pending"
      threads={threads}
      messages={messages}
    />
  )
}
