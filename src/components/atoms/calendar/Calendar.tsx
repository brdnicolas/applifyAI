import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import './Calendar.scss'
import { DateSelectArg } from '@fullcalendar/core'
import { AddCardEvent } from './addEventCard/addEventCard'

export const Calendar = () => {
  let eventId = 0

  const createEventId = () => {
    return String(eventId++)
  }

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt('Please enter a new title for your event')
    const calendarApi = selectInfo.view.calendar

    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  return (
    <div className="mt-12 mb-10">
      <p className="font-bold text-4 text-gray-50 mb-6">Évévenment à venir</p>
      <div className="grid grid-cols-4 mb-13">
        <AddCardEvent />
      </div>
      <p className="font-bold text-4 text-gray-50 mb-6">Évévenment à venir</p>
      <FullCalendar
        navLinks
        eventColor="#D6D6D6"
        eventTextColor="#090909"
        editable
        eventClassNames="event-container"
        eventClick={(info) => {
          console.log(info.event.title, info.event.startStr)
        }}
        select={handleDateSelect}
        selectable
        unselectAuto
        firstDay={1}
        dayHeaderFormat={{ weekday: 'long' }}
        buttonText={{ today: "Aujourd'hui", month: 'Mois', year: 'Année', week: 'Semaine', day: 'Jour' }}
        headerToolbar={{ start: 'prev,next', center: 'title', end: 'dayGridDay,dayGridMonth,dayGridYear' }}
        locale={'fr'}
        plugins={[interactionPlugin, dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  )
}
