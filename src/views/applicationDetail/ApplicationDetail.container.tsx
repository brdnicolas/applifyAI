import { withAuthenticatedUser } from '@/utils/hoc/withAuthenticatedUser'
import { withGlobalLayout } from '@/utils/hoc/withGlobalLayout'

export const ApplicationDetailsContainer = withAuthenticatedUser(
  withGlobalLayout(() => {
    return <div className="laptop:pt-16">ApplicationDetails</div>
  })
)
