import { ApplicationStates, MinimalApplication } from '@/contexts/applications/applications.types'

export enum EApplicationsActions {
  SET_APPLICATIONS = 'SET_APPLICATIONS',
  ADD_APPLICATION = 'ADD_APPLICATION',
  DELETE_APPLICATION = 'DELETE_APPLICATION'
}

type SetApplications = {
  type: EApplicationsActions.SET_APPLICATIONS
  payload: {
    target?: ApplicationStates
    applications: MinimalApplication[]
  }
}

export const setApplications = (args: {
  target?: ApplicationStates
  applications: MinimalApplication[]
}): SetApplications => ({
  type: EApplicationsActions.SET_APPLICATIONS,
  payload: args
})

type AddApplication = {
  type: EApplicationsActions.ADD_APPLICATION
  payload: {
    application: MinimalApplication
  }
}

export const addApplication = (args: { application: MinimalApplication }): AddApplication => ({
  type: EApplicationsActions.ADD_APPLICATION,
  payload: args
})

type DeleteApplication = {
  type: EApplicationsActions.DELETE_APPLICATION
  payload: {
    id: number
  }
}

export const deleteApplication = (args: { id: number }): DeleteApplication => ({
  type: EApplicationsActions.DELETE_APPLICATION,
  payload: args
})

export type ApplicationsActions = SetApplications | DeleteApplication | AddApplication
