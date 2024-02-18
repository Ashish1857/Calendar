import React from 'react';
import { format } from 'date-fns';

const CalendarHeader = ({ currentDate, prevMonth, nextMonth }) => (
  <div className="calendar-nav">
    <p className="arrow-container" data-testid="prev-month" onClick={prevMonth}><span className="arrow right-arrow"></span></p>
    <h1>{format(currentDate, 'MMMM yyyy')}</h1>
    <p className="arrow-container" data-testid="next-month" onClick={nextMonth}><span className="arrow left-arrow"></span></p>
  </div>
);

export default CalendarHeader;
