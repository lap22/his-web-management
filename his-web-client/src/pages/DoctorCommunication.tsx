import React from 'react'
import CommunicationWorkspace from '../components/domain/CommunicationWorkspace'
import StateBlock from '../components/ui/StateBlock'
import useApiResource from '../hooks/useApiResource'
import { hisService } from '../services/hisService'

export default function DoctorCommunication() {
  const { data, error, isLoading } = useApiResource(() => hisService.getDoctorCommunication(), [])

  if (isLoading) {
    return <StateBlock message="Loading doctor communication data..." />
  }

  if (error || !data) {
    return <StateBlock title="Doctor communication unavailable" message={error ?? 'Communication data is empty.'} tone="error" />
  }

  return (
    <CommunicationWorkspace
      title="Staff Threads"
      metric={data.metric}
      threads={data.threads}
      messages={data.messages}
    />
  )
}
