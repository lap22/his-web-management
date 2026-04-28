import React from 'react'
import CommunicationWorkspace from '../components/domain/CommunicationWorkspace'

const threads = [
  { name: 'Emergency Team', meta: 'Bed capacity and escalation routing', status: 'Urgent', tone: 'error' as const },
  { name: 'Cardiology Unit', meta: 'Pre-op clearance notes', status: 'Open' },
  { name: 'Radiology Desk', meta: 'MRI attachment review', status: 'Waiting', tone: 'warning' as const },
  { name: 'Pediatrics Lead', meta: 'Shift handoff summary', status: 'Open' },
]

const messages = [
  {
    sender: 'Dr. Hoa Tran',
    body: 'Emergency has two high-risk arrivals. Please reroute one imaging slot and notify ICU intake.',
    time: '10:04',
  },
  {
    sender: 'Operations Admin',
    body: 'ICU intake has been notified. Radiology slot at 10:45 is reserved for emergency review.',
    time: '10:08',
  },
  {
    sender: 'Dr. Quang Le',
    body: 'Attachment received. I will prioritize the scan and publish findings to the thread.',
    time: '10:11',
  },
]

export default function DoctorCommunication() {
  return (
    <CommunicationWorkspace
      title="Staff Threads"
      metric="3 urgent"
      threads={threads}
      messages={messages}
    />
  )
}
