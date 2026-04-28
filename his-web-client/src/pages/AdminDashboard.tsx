import React from 'react'
import DataTable from '../components/ui/DataTable'
import MetricCard from '../components/ui/MetricCard'
import Panel, { PanelHeader } from '../components/ui/Panel'
import StateBlock from '../components/ui/StateBlock'
import StatusBadge from '../components/ui/StatusBadge'
import useApiResource from '../hooks/useApiResource'
import { hisService } from '../services/hisService'

export default function AdminDashboard() {
  const { data, error, isLoading } = useApiResource(() => hisService.getDashboard(), [])

  if (isLoading) {
    return <StateBlock message="Fetching dashboard metrics from the HIS API..." />
  }

  if (error || !data) {
    return <StateBlock title="Dashboard unavailable" message={error ?? 'Dashboard data is empty.'} tone="error" />
  }

  const departmentRows = data.departmentLoad.map((row) => [
    row.department,
    row.capacity,
    row.queue,
    <StatusBadge tone={row.tone}>{row.status}</StatusBadge>,
  ])

  return (
    <section className="page-grid">
      <div className="metric-strip span-12">
        {data.metrics.map((stat) => (
          <MetricCard key={stat.label} {...stat} />
        ))}
      </div>

      <Panel span={8}>
        <PanelHeader
          eyebrow="Care operations"
          title="Department Load"
          action={<button className="text-button" type="button">View all</button>}
        />
        <DataTable columns={['Department', 'Capacity', 'Queue', 'Status']} rows={departmentRows} />
      </Panel>

      <Panel span={4}>
        <p className="eyebrow">System load</p>
        <h2>Live HIS Pulse</h2>
        <div className="pulse-stack">
          {data.systemPulse.map((pulse) => (
            <div key={pulse.label}>
              <span>{pulse.label}</span>
              <strong>{pulse.value}</strong>
            </div>
          ))}
        </div>
      </Panel>
    </section>
  )
}
