import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import AdminDashboard from './pages/AdminDashboard'
import DoctorCommunication from './pages/DoctorCommunication'
import DoctorManagement from './pages/DoctorManagement'
import PatientCommunication from './pages/PatientCommunication'

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/doctors" element={<DoctorManagement />} />
        <Route path="/patient-communication" element={<PatientCommunication />} />
        <Route path="/doctor-communication" element={<DoctorCommunication />} />
        <Route path="*" element={<AdminDashboard />} />
      </Routes>
    </AppShell>
  )
}
