import { ApplicationDetailsState } from './applicationDetails.types'

export enum EApplicationDetailsActions {
  SET_INFORMATION = 'SET_INFORMATION'
}

export type SetInformation = {
  type: EApplicationDetailsActions.SET_INFORMATION
  payload: ApplicationDetailsState
}

export const setInformation = (args: ApplicationDetailsState): SetInformation => ({
  type: EApplicationDetailsActions.SET_INFORMATION,
  payload: args
})

export type ApplicationDetailsActions = SetInformation
