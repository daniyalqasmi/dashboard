import React from 'react';

const Calendar: React.FC = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const times = Array.from({ length: 10 }, (_, i) => `${i + 8} AM`);

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      {/* Calendar Header with Search */}
      <div className="flex items-center justify-center space-x-60 mb-4">

        {/* Top Search Bar */}
        <h1 className="text-xl font-bold">Weekly Calendar</h1>
        <div className="flex items-center  gap-2">
          {/* View Buttons */}
          <button className="px-4 py-1 text-sm text-white bg-blue-500 rounded">Day</button>
          <button className="px-4 py-1 text-sm text-white bg-blue-500 rounded">Week</button>
          <button className="px-4 py-1 text-sm text-white bg-blue-500 rounded">Month</button>
          <button className="px-4 py-1 text-sm text-white bg-blue-500 rounded">Year</button>
          
          {/* Single Search Input */}
        </div>
        
          <input
            type="text"
            placeholder="Search events..."
            className="px-4 py-1 border rounded-lg"
          />
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {/* Time Column */}
        <div className="space-y-4">
          {times.map((time, idx) => (
            <div key={idx} className="text-center text-sm text-gray-500 h-12">{time}</div>
          ))}
        </div>

        {/* Days Columns */}
        {days.map((day, dayIdx) => (
          <div key={dayIdx} className="border-l border-gray-300">
            {/* Day Header */}
            <div className="text-center font-medium text-gray-700 py-2 border-b border-gray-300">{day}</div>

            {/* Placeholder for time slots */}
            <div className="space-y-4">
              {Array.from({ length: 10 }).map((_, slotIdx) => (
                <div key={slotIdx} className="h-12 border-b border-gray-200"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
