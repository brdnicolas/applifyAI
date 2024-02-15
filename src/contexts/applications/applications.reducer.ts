import { Reducer } from 'react'
import { ApplicationsActions, EApplicationsActions } from '@/contexts/applications/applications.actions'
import { ApplicationsState } from '@/contexts/applications/applications.types'

export const initialState: ApplicationsState = {
  applied: [],
  relaunched: [],
  interviewObtained: [],
  archived: []
}

export const applicationsReducer: Reducer<ApplicationsState, ApplicationsActions> = (state = initialState, action) => {
  switch (action.type) {
    case EApplicationsActions.SET_APPLICATIONS:
      if (action.payload.target) {
        return {
          ...state,
          [action.payload.target]: action.payload.applications
        }
      } else {
        return {
          ...state,
          ...action.payload
        }
      }
    case EApplicationsActions.ADD_APPLICATION:
      return {
        ...state,
        applied: [action.payload.application, ...state.applied]
      }
    case EApplicationsActions.DELETE_APPLICATION:
      return {
        applied: state.applied.filter((x) => x.id !== action.payload.id),
        relaunched: state.relaunched.filter((x) => x.id !== action.payload.id),
        interviewObtained: state.interviewObtained.filter((x) => x.id !== action.payload.id),
        archived: state.archived.filter((x) => x.id !== action.payload.id)
      }
    default:
      return { ...state }
  }
}
