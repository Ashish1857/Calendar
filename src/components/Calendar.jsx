import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfWeek, endofmo , addDays, endOfWeek, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from 'date-fns';
import CalendarHeader from './CalendarHeader';
import DayHeader from './DayHeader';
import DayCell from './DayCell';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedGame, setSelectedGame] = useState(null);
  const gameReleases = [
    { date: '2024-01-01', imageUrl: 'gran-turismo.jpg', title: 'Gran Turismo' },
    { date: '2024-01-07', imageUrl: 'megaman.jpg', title: 'Mega Man' },
    { date: '2024-02-25', imageUrl: '/xbone.jpg', title: 'Every Xbox One Launch Game' },
    { date: '2024-03-07', imageUrl: 'megaman.jpg', title: 'Add Man' },
  ];

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleDateClick=(game)=>{
    setSelectedGame(game)
  }

  const renderCalendarDays = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "yyyy-MM-dd";
    let days = [];

    eachDayOfInterval({ start: startDate, end: endDate }).forEach(day => {
      const formattedDate = format(day, dateFormat);
      const gameRelease = gameReleases.find(game => game.date === formattedDate);
      const dayInMonth = isSameMonth(day, monthStart);
      days.push(
        <DayCell 
          key={day} 
          day={day} 
          dayInMonth={dayInMonth} 
          gameRelease={gameRelease} 
        />
      );
    });

    return days;
  };

  return (
    <div className="calendar">
      <CalendarHeader currentDate={currentDate} prevMonth={prevMonth} nextMonth={nextMonth} />
      <DayHeader />
      <div className="calendar-grid">
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;
