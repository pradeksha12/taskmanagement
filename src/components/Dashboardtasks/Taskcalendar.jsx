import React, { useState } from 'react';
import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';

function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h2>Calendar View</h2>
      <div>
        <Calendar
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
}

export default CalendarView;
