import React from 'react'
import DataTable from '../components/ui/DataTable'
import Panel, { PanelHeader } from '../components/ui/Panel'
import StatusBadge from '../components/ui/StatusBadge'

const doctorRows = [
  ['DR-204', 'Dr. An Nguyen', 'Cardiology', '08:00-16:00', <StatusBadge>Available</StatusBadge>],
  ['DR-118', 'Dr. Hoa Tran', 'Emergency', 'On call', <StatusBadge tone="warning">High load</StatusBadge>],
  ['DR-331', 'Dr. Quang Le', 'Radiology', '10:00-18:00', <StatusBadge>Available</StatusBadge>],
  ['DR-427', 'Dr. Binh Pham', 'Pediatrics', '12:00-20:00', <StatusBadge tone="error">Escalated</StatusBadge>],
]

export default function DoctorManagement() {
  return (
    <section className="page-grid">
      <Panel span={12}>
        <PanelHeader
          eyebrow="Clinical staffing"
          title="Doctor Directory"
          action={<StatusBadge>46 active clinicians</StatusBadge>}
        />
        <DataTable
          columns={['ID', 'Doctor', 'Department', 'Schedule', 'Status']}
          rows={doctorRows}
        />
      </Panel>
    </section>
  )
}
