import { Avatar, TabsGroup } from '@/components'
import { setInformation } from '@/contexts/applicationDetails/applicationDetails.actions'
import { useApplicationDetailsContext } from '@/contexts/applicationDetails/applicationDetails.provider'
import { getApplicationById } from '@/services/applications/application'
import { SHORT_DISPLAY_DATE_FORMAT } from '@/shared/constants'
import { withAuthenticatedUser } from '@/utils/hoc/withAuthenticatedUser'
import { withGlobalLayout } from '@/utils/hoc/withGlobalLayout'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { InformationsContainer } from './containers/Informations.container'
import { EventContainer } from './containers/Event.container'
import { ContactsContainer } from './containers/Contacts.container'
import { NotesContainer } from './containers/Notes.container'

export const ApplicationDetailsContainer = withAuthenticatedUser(
  withGlobalLayout(() => {
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
          return <InformationsContainer />
      }
    }

    useEffect(() => {
      const token = localStorage.getItem('token')

      if (!token) {
        return
      }

      getApplicationById(Number(applicationId))
        .then((data) => {
          dispatch(setInformation(data))
        })
        .catch(() => {
          localStorage.removeItem('token')
          window.location.reload()
        })
    }, [])
    return (
      <div className="laptop:pt-16">
        <header className="flex items-center">
          <Avatar src={companyImageUrl} alt="Logo company" className="w-20 h-20" />
          <div className="ml-5">
            <p className="text-4 text-gray-200">
              {company} - <span className="font-bold">{job}</span>
            </p>
            <p className="text-3 text-gray-200">Postulé le {dayjs(createdAt).format(SHORT_DISPLAY_DATE_FORMAT)}</p>
          </div>
        </header>
        <TabsGroup className="mt-10" options={options} />
        {selectedContainer()}
      </div>
    )
  })
)
