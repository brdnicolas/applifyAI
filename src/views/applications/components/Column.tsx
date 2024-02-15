import { Draggable, Droppable } from 'react-beautiful-dnd'
import { MinimalApplication } from '@/contexts/applications/applications.types'
import { Card } from './Card'
import { Icon } from '@/components/atoms/icons/Icon'
import { IconName } from '@/components/atoms/icons/types'
import clsx from 'clsx'
import { deleteApplicationById } from '@/services/applications/application'
import { useApplicationsContext } from '@/contexts/applications/applications.provider'
import { deleteApplication } from '@/contexts/applications/applications.actions'
import { useUserContext } from '@/contexts/user/user.provider'
import { decreaseApplicationsNumber } from '@/contexts/user/user.action'

type ColumnProps = {
  cards: MinimalApplication[]
  id: string
  color: string
  icon: IconName
  title: string
}

export const Column = ({ cards, id, color, icon, title }: ColumnProps) => {
  const { dispatch: dispatchApplications } = useApplicationsContext()
  const { dispatch: dispatchUser } = useUserContext()
  const variantsColor: any = {
    applied: 'bg-applicationStatus-applied',
    relaunched: 'bg-applicationStatus-relaunched',
    interviewObtained: 'bg-applicationStatus-interviewObtained',
    archived: 'bg-gray-500'
  }

  const handleOnDelete = (cardId: number) => {
    deleteApplicationById(Number(cardId))
    dispatchApplications(deleteApplication({ id: cardId }))
    dispatchUser(decreaseApplicationsNumber(1))
  }

  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div className="min-w-[285px] max-w-[285px] h-full overflow-hidden flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center pb-4">
              <div className={clsx('h-4 w-1 rounded-full mr-2', variantsColor[color])} />
              <Icon className="w-7 h-7 text-gray-500" name={icon} />
              <h2 className={clsx('ml-2 text-base', id === 'archived' ? 'text-gray-500' : 'text-gray-200')}>
                {title}
                {cards.length > 1 && 's'} {cards.length}
              </h2>
            </div>
            <Icon name="more-horizontal" className="cursor-pointer w-6 h-6 text-gray-500" />
          </div>
          <div className="h-full overflow-y-auto pb-5" {...provided.droppableProps} ref={provided.innerRef}>
            {cards.map((card, index) => (
              <Draggable key={card.id} draggableId={card.id + ''} index={index}>
                {(provided) => (
                  <div
                    className={clsx(
                      'overflow-hidden mt-5 outline-none rounded-4 border-2 border-transparent focus:border-2 focus:border-gray-500 focus:box-border',
                      id === 'archived' && 'opacity-20',
                      'border-2 border-transparent hover:border-2 hover:border-gray-500 hover:box-border'
                    )}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card
                      applicationId={card.id}
                      onDelete={() => handleOnDelete(Number(card.id))}
                      avatar={card.companyImageUrl}
                      company={card.company}
                      job={card.job}
                      date={card.applicationDate}
                      coverLetter={card.coverLetter}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  )
}
