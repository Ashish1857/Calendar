import React from 'react';
import { format } from 'date-fns';

const CalendarHeader = ({ currentDate, prevMonth, nextMonth }) => (
  <div className="calendar-nav">
    <button onClick={prevMonth}>{'<'}</button>
    <h1>{format(currentDate, 'MMMM yyyy')}</h1>
    <button onClick={nextMonth}>{'>'}</button>
  </div>
);

export default CalendarHeader;
