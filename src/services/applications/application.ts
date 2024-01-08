import { Application, EApplicationState, EApplicationStateId } from '@/contexts/applications/applications.types'
import { api } from '../api'

export const getAllUserApplications = async (): Promise<Application[]> => {
  return api.get('/applications').then((response) => response.data)
}

export const updateApplicationStateById = async (
  applicationId: number,
  applicationState: EApplicationState
): Promise<Application> => {
  return api
    .patch(`/applications/${applicationId}`, {
      applicationStateId: EApplicationStateId[applicationState]
    })
    .then((response) => response.data)
}

export type CreateApplication = {
  job: string
  jobOfferUrl?: string
  company: string
  applicationDate: string
}

export const createApplication = async (application: CreateApplication): Promise<Application> => {
  return api
    .post('/applications', {
      ...application,
      applicationStateId: EApplicationStateId.applied
    })
    .then((response) => response.data)
}

export const deleteApplicationById = async (applicationId: number): Promise<Application> => {
  return api.delete(`/applications/${applicationId}`).then((response) => response.data)
}

export const scrapApplication = async (jobOfferUrl: string): Promise<Application> => {
  return api
    .post('/applications/scrap', {
      jobOfferUrl
    })
    .then((response) => response.data)
}

export const getApplicationById = async (applicationId: number): Promise<Application> => {
  return api.get(`/applications/${applicationId}`).then((response) => response.data)
}
