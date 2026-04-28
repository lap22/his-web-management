import React from 'react'
import CommunicationWorkspace from '../components/domain/CommunicationWorkspace'
import StateBlock from '../components/ui/StateBlock'
import useApiResource from '../hooks/useApiResource'
import { hisService } from '../services/hisService'

export default function PatientCommunication() {
  const { data, error, isLoading } = useApiResource(() => hisService.getPatientCommunication(), [])

  if (isLoading) {
    return <StateBlock message="Loading patient communication data..." />
  }

  if (error || !data) {
    return <StateBlock title="Patient communication unavailable" message={error ?? 'Communication data is empty.'} tone="error" />
  }

  return (
    <CommunicationWorkspace
      title="Patient Messages"
      metric={data.metric}
      threads={data.threads}
      messages={data.messages}
    />
  )
}
