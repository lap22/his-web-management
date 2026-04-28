import api from './api'
import {
  dashboardMock,
  doctorCommunicationMock,
  doctorsMock,
  patientCommunicationMock,
} from './mockHisData'
import type { CommunicationData, DashboardData, Doctor } from '../types/his'

type ApiEnvelope<T> = T | { data: T }
type ResourceValidator<T> = (data: unknown) => data is T

function unwrap<T>(payload: ApiEnvelope<T>): T {
  if (payload && typeof payload === 'object' && 'data' in payload) {
    return payload.data
  }

  return payload
}

function shouldUseMockApi() {
  return import.meta.env.VITE_USE_MOCK_API === 'true' || (import.meta.env.DEV && !import.meta.env.VITE_API_URL)
}

function isDashboardData(data: unknown): data is DashboardData {
  return Boolean(
    data &&
      typeof data === 'object' &&
      Array.isArray((data as DashboardData).metrics) &&
      Array.isArray((data as DashboardData).departmentLoad) &&
      Array.isArray((data as DashboardData).systemPulse),
  )
}

function isDoctorList(data: unknown): data is Doctor[] {
  return Array.isArray(data)
}

function isCommunicationData(data: unknown): data is CommunicationData {
  return Boolean(
    data &&
      typeof data === 'object' &&
      typeof (data as CommunicationData).metric === 'string' &&
      Array.isArray((data as CommunicationData).threads) &&
      Array.isArray((data as CommunicationData).messages),
  )
}

async function getResource<T>(url: string, fallback: T, isValid: ResourceValidator<T>): Promise<T> {
  if (shouldUseMockApi()) {
    return fallback
  }

  try {
    const response = await api.get<ApiEnvelope<T>>(url)
    const data = unwrap(response.data)

    if (!isValid(data)) {
      if (import.meta.env.DEV) {
        console.warn(`Using fallback data for ${url}: invalid API response shape`)
      }

      return fallback
    }

    return data
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn(`Using fallback data for ${url}`, error)
    }

    return fallback
  }
}

export const hisService = {
  getDashboard(): Promise<DashboardData> {
    return getResource('/dashboard', dashboardMock, isDashboardData)
  },

  getDoctors(): Promise<Doctor[]> {
    return getResource('/doctors', doctorsMock, isDoctorList)
  },

  getPatientCommunication(): Promise<CommunicationData> {
    return getResource('/communications/patients', patientCommunicationMock, isCommunicationData)
  },

  getDoctorCommunication(): Promise<CommunicationData> {
    return getResource('/communications/doctors', doctorCommunicationMock, isCommunicationData)
  },
}
