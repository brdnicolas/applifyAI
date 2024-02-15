import { Dispatch, ReactNode, createContext, useContext, useMemo, useReducer } from 'react'
import { ApplicationDetailsState } from './applicationDetails.types'
import { ApplicationDetailsActions } from './applicationDetails.actions'
import { applicationDetailsReducer, initialState } from './applicationDetails.reducer'

type ApplicationDetailsContext = ApplicationDetailsState & {
  dispatch: Dispatch<ApplicationDetailsActions>
}

const applicationDetailsContext = createContext<ApplicationDetailsContext>({ ...initialState, dispatch: () => {} })

export const useApplicationDetailsContext = () => useContext(applicationDetailsContext)

type ApplicationDetailsProviderPropsType = {
  children: ReactNode
}

export const ApplicationDetailsProvider = ({ children }: ApplicationDetailsProviderPropsType) => {
  const [state, dispatch] = useReducer(applicationDetailsReducer, initialState)

  const value: ApplicationDetailsContext = useMemo(() => ({ ...state, dispatch }), [state])
  return <applicationDetailsContext.Provider value={value}>{children}</applicationDetailsContext.Provider>
}
