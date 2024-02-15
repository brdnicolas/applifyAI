import { Avatar, TabsGroup } from '@/components'
import { setInformation } from '@/contexts/applicationDetails/applicationDetails.actions'
import { useApplicationDetailsContext } from '@/contexts/applicationDetails/applicationDetails.provider'
import { getApplicationById } from '@/services/applications/application'
import { SHORT_DISPLAY_DATE_FORMAT } from '@/shared/constants'
import { withAuthenticatedUser } from '@/utils/hoc/withAuthenticatedUser'
import { withGlobalLayout } from '@/utils/hoc/withGlobalLayout'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { EventContainer } from './containers/Event.container'
import { ContactsContainer } from './containers/Contacts.container'
import { NotesContainer } from './containers/Notes.container'
import { InformationContainerSkeleton } from '@/views/applicationDetails/containers/information/Information.skeleton'
import { TextSkeleton } from '@/components/atoms/text/Text.skeleton'
import { InformationsContainer } from './containers/information/Information.container'

export const ApplicationDetailsContainer = withAuthenticatedUser(
  withGlobalLayout(() => {
    const [isApplicationDetailsLoading, setIsApplicationDetailsLoading] = useState(false)
    const { companyImageUrl, company, job, createdAt, dispatch } = useApplicationDetailsContext()
    const applicationId = window.location.href.split('/')[4]

    const [tabSelected, setTabSelected] = useState('informations')

    const options = [
      {
        label: 'Informations',
        id: 'informations',
        onClick: () => setTabSelected('informations'),
        isSelected: tabSelected === 'informations'
      },
      {
        label: 'Mes événements',
        id: 'events',
        onClick: () => setTabSelected('events'),
        isSelected: tabSelected === 'events'
      },
      {
        label: 'Contacts',
        id: 'contacts',
        onClick: () => setTabSelected('contacts'),
        isSelected: tabSelected === 'contacts'
      },
      {
        label: 'Notes',
        id: 'notes',
        onClick: () => setTabSelected('notes'),
        isSelected: tabSelected === 'notes'
      }
    ]

    const selectedContainer = () => {
      switch (tabSelected) {
        case 'events':
          return <EventContainer />
        case 'contacts':
          return <ContactsContainer />
        case 'notes':
          return <NotesContainer />
        default:
          return isApplicationDetailsLoading ? <InformationContainerSkeleton /> : <InformationsContainer />
      }
    }

    useEffect(() => {
      setIsApplicationDetailsLoading(true)
      getApplicationById(+applicationId)
        .then((data) => {
          dispatch(setInformation(data))
        })
        .finally(() => setIsApplicationDetailsLoading(false))
    }, [])

    return (
      <div className="laptop:pt-16 laptop:pr-13">
        <header className="flex items-center">
          <Avatar src={companyImageUrl} alt="Logo company" className="w-20 h-20" />
          <div className="ml-5">
            {isApplicationDetailsLoading ? (
              <>
                <TextSkeleton className="w-[500px] text-3" />
                <TextSkeleton className="w-[100px] text-2 mt-1" />
              </>
            ) : (
              <>
                <p className="text-4 text-gray-200">
                  {company} - <span className="font-bold">{job}</span>
                </p>
                <p className="text-3 text-gray-200">Postulé le {dayjs(createdAt).format(SHORT_DISPLAY_DATE_FORMAT)}</p>
              </>
            )}
          </div>
        </header>
        <TabsGroup className="mt-10" options={options} />
        {selectedContainer()}
      </div>
    )
  })
)
