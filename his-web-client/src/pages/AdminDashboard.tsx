import React from 'react'
import DataTable from '../components/ui/DataTable'
import MetricCard from '../components/ui/MetricCard'
import Panel, { PanelHeader } from '../components/ui/Panel'
import StatusBadge from '../components/ui/StatusBadge'

const stats = [
  { label: 'Active patients', value: '1,284', change: '+8.2%', tone: 'info' as const },
  { label: 'Doctors on duty', value: '46', change: '12 depts', tone: 'success' as const },
  { label: 'Queue wait', value: '18m', change: '-4m', tone: 'success' as const },
  { label: 'Critical alerts', value: '7', change: 'Review', tone: 'warning' as const },
]

const departmentRows = [
  ['Emergency', '94%', '12 waiting', <StatusBadge>Stable</StatusBadge>],
  ['Cardiology', '81%', '6 waiting', <StatusBadge tone="warning">High load</StatusBadge>],
  ['Radiology', '68%', '3 waiting', <StatusBadge>Stable</StatusBadge>],
  ['Pediatrics', '73%', '5 waiting', <StatusBadge>Stable</StatusBadge>],
]

export default function AdminDashboard() {
  return (
    <section className="page-grid">
      <div className="metric-strip span-12">
        {stats.map((stat) => (
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
          <div>
            <span>API latency</span>
            <strong>124ms</strong>
          </div>
          <div>
            <span>Message backlog</span>
            <strong>31</strong>
          </div>
          <div>
            <span>Sync health</span>
            <strong>99.9%</strong>
          </div>
        </div>
      </Panel>
    </section>
  )
}
