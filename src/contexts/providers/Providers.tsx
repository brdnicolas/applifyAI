import { ApplicationDetailsProvider } from '@/contexts/applicationDetails/applicationDetails.provider'
import { ApplicationsProvider } from '@/contexts/applications/applications.provider'
import { BreakpointsProvider } from '@/contexts/breakpoints/breakpoints.provider'
import { ReactNode } from 'react'

type ProviderPropsType = {
  children: ReactNode
}

export const Providers = ({ children }: ProviderPropsType) => {
  return (
    <BreakpointsProvider>
      <ApplicationsProvider>
        <ApplicationDetailsProvider>{children}</ApplicationDetailsProvider>
      </ApplicationsProvider>
    </BreakpointsProvider>
  )
}
