import { Draggable, Droppable } from 'react-beautiful-dnd'
import { Application } from '@/contexts/applications/applications.types'
import { Card } from './Card'
import { Icon } from '@/components/atoms/icons/Icon'
import { IconName } from '@/components/atoms/icons/types'
type ColumnProps = {
  cards: Application[]
  id: string
  color: string
  icon: IconName
  title: string
}

export const Column = ({ cards, id, color, icon, title }: ColumnProps) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div className="pr-12 first:pl-12 min-w-[308px] ">
          <div className="flex items-center justify-between mt-12">
            <div className="flex items-center">
              <div className={`h-4 w-1 bg-applicationStatus-${color}`} />
              <Icon className="w-7 h-7 text-gray-500" name={icon} />
              <h2 className="ml-2 text-gray-500 text-base">
                {title} {cards.length}
              </h2>
            </div>
            <Icon name="more-horizontal" className="cursor-pointer w-6 h-6 text-gray-500" />
          </div>
          <div className="h-full" {...provided.droppableProps} ref={provided.innerRef}>
            {cards.map((card, index) => (
              <Draggable key={card.id} draggableId={card.id} index={index}>
                {(provided) => (
                  <div
                    className="mt-5 outline-none rounded-2xl border-2 border-transparent focus:border-2 focus:border-gray-500 focus:box-border"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card avatar={card.imageUrl} company={card.company} job={card.job} date={card.date} />
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
