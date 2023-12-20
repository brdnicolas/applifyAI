import { Draggable, Droppable } from 'react-beautiful-dnd'
import React from 'react'
import { ApplicationCard } from '@/contexts/applications/applications.types'

type ColumnProps = {
  cards: ApplicationCard[]
  id: string
}

export const Column = ({ cards, id }: ColumnProps) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div className="w-[200px] bg-red-900">
          <h2>{id}</h2>
          <div className="h-full" {...provided.droppableProps} ref={provided.innerRef}>
            {cards.map((card, index) => (
              <Draggable key={card.id} draggableId={card.id} index={index}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {card.company}
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
