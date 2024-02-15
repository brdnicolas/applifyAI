import { ApplicationDetailsState } from './applicationDetails.types'

export enum EApplicationDetailsActions {
  SET_INFORMATION = 'SET_INFORMATION'
}

export type SetInformation = {
  type: EApplicationDetailsActions.SET_INFORMATION
  payload: Partial<ApplicationDetailsState>
}

export const setInformation = (args: Partial<ApplicationDetailsState>): SetInformation => ({
  type: EApplicationDetailsActions.SET_INFORMATION,
  payload: args
})

export type ApplicationDetailsActions = SetInformation
