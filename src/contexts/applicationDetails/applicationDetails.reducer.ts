import { Reducer } from 'react'
import { ApplicationDetailsState } from './applicationDetails.types'
import { ApplicationDetailsActions, EApplicationDetailsActions } from './applicationDetails.actions'

export const initialState: ApplicationDetailsState = {
  id: 1,
  job: '',
  company: '',
  applicationDate: '',
  cv: { fileName: '', size: 1 },
  coverLetter: { fileName: '', size: 1 },
  companyImageUrl: '',
  userId: 1,
  createdAt: '',
  jobOfferUrl: '',
  applicationState: {
    name: 'applied'
  }
}

export const applicationDetailsReducer: Reducer<ApplicationDetailsState, ApplicationDetailsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case EApplicationDetailsActions.SET_INFORMATION:
      return { ...state, ...action.payload }
    default:
      return { ...state }
  }
}
