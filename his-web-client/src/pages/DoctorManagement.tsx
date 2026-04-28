import React from 'react'
import DataTable from '../components/ui/DataTable'
import Panel, { PanelHeader } from '../components/ui/Panel'
import StateBlock from '../components/ui/StateBlock'
import StatusBadge from '../components/ui/StatusBadge'
import useApiResource from '../hooks/useApiResource'
import { hisService } from '../services/hisService'

export default function DoctorManagement() {
  const { data: doctors, error, isLoading } = useApiResource(() => hisService.getDoctors(), [])

  if (isLoading) {
    return <StateBlock message="Loading doctor directory from the HIS API..." />
  }

  if (error || !doctors) {
    return <StateBlock title="Doctor directory unavailable" message={error ?? 'Doctor data is empty.'} tone="error" />
  }

  const doctorRows = doctors.map((doctor) => [
    doctor.id,
    doctor.name,
    doctor.department,
    doctor.schedule,
    <StatusBadge tone={doctor.tone}>{doctor.status}</StatusBadge>,
  ])

  return (
    <section className="page-grid">
      <Panel span={12}>
        <PanelHeader
          eyebrow="Clinical staffing"
          title="Doctor Directory"
          action={<StatusBadge>{doctors.length} active clinicians</StatusBadge>}
        />
        <DataTable
          columns={['ID', 'Doctor', 'Department', 'Schedule', 'Status']}
          rows={doctorRows}
        />
      </Panel>
    </section>
  )
}
