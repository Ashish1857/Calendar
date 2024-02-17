import React from 'react';

const DayHeader = () => (
  <div className="day-header-container">
    {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
      <div className="day-header" key={day}>{day}</div>
    ))}
  </div>
);

export default DayHeader;
