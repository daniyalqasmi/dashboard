import { useState } from 'react';
import { FaCalendarAlt, FaPlane, FaCheckCircle } from "react-icons/fa";
import { FiFilter } from 'react-icons/fi';

const Cards = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="space-y-4 bg-gray-100 min-h-screen">
      {/* Top Controls */}
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-white shadow rounded-md">Today</button>
          <button className="px-4 py-2 bg-white shadow rounded-md">July 17</button>
          <button className="px-4 py-2 bg-white shadow rounded-md flex items-center space-x-1">
            <span>7:10 PM IST</span>
          </button>
          <select className="px-4 py-2 bg-white shadow rounded-md">
            <option>Indian Timezone</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-white shadow rounded-md">&lt;</button>
          <button className="px-4 py-2 bg-white shadow rounded-md">&gt;</button>
          <select className="px-4 py-2 bg-white shadow rounded-md">
            <option>This week</option>
          </select>
          <button
            onClick={openModal}
            className="px-4 py-2 bg-blue-600 text-white shadow rounded-md"
          >
            + Add event
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-md">
          <div className="p-4 bg-blue-100 rounded-full">
            <FaCalendarAlt className="text-blue-600 text-2xl" />
          </div>
          <div>
            <h2 className="text-xl font-bold">12</h2>
            <p className="text-gray-600">Upcoming Events</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-md">
          <div className="p-4 bg-purple-100 rounded-full">
            <FaPlane className="text-purple-600 text-2xl" />
          </div>
          <div>
            <h2 className="text-xl font-bold">3</h2>
            <p className="text-gray-600">Upcoming Travel</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-md">
          <div className="p-4 bg-green-100 rounded-full">
            <FaCheckCircle className="text-green-600 text-2xl" />
          </div>
          <div>
            <h2 className="text-xl font-bold">12</h2>
            <p className="text-gray-600">Meeting Done!!</p>
          </div>
        </div>
      </div>

      {/* Meetings Overview */}
      <div className="pt-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Weekly Meetings Overview</h2>
          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <FiFilter className="mr-1" />
            Filter
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <MeetingCard timeLeft="7H Left" location="XYZ Street, New York, America" />
          <MeetingCard timeLeft="7H Left" location="XYZ Street, New York, America" />
        </div>

        {/* Meeting Proposals */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Meetings Proposals</h2>
          <button className="flex items-center text-gray-500 hover:text-gray-700">
            <FiFilter className="mr-1" />
            Filter by slot
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <MeetingProposalCard isFree={true} />
          <MeetingProposalCard isFree={false} />
          <MeetingProposalCard isFree={true} />
        </div>
      </div>

      {/* Add Event Modal */}
      {showModal && (
         <div className="space-y-4 bg-gray-100 min-h-screen">
         <div className="flex justify-end p-4">
           <button
             onClick={openModal}
             className="px-4 py-2 bg-blue-600 text-white shadow rounded-md"
           >
             + Add event
           </button>
         </div>
   
         {showModal && (
           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 pd-3">
             <div className="bg-white w-full max-w-lg h-full rounded-lg p-6 relative shadow-lg ">
               <button
                 onClick={closeModal}
                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                 aria-label="Close"
               >
                 &times;
               </button>
   
               <h2 className="text-2xl font-semibold mb-4">Add new event</h2>
               
               {/* Meeting Heading */}
               <input
                 type="text"
                 placeholder="Meeting heading..."
                 className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:border-blue-500"
               />
   
               {/* Smart Suggestions */}
               <div className="flex items-center space-x-2 mb-4">
                 <span className="text-gray-500">Smart suggestions <span className="text-purple-500">(Premium)</span></span>
                 <button className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700">Duration</button>
                 <button className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700">Timezone</button>
               </div>
   
               {/* Free Slots */}
               <div className="grid grid-cols-2 gap-4 mb-4">
                 <div className="border rounded-lg p-3">
                   <h3 className="font-semibold">Free slot 1</h3>
                   <p className="text-gray-500 text-sm">19 January 2024</p>
                   <p className="text-green-600">9:00 PM - 10:00 PM</p>
                 </div>
                 <div className="border rounded-lg p-3">
                   <h3 className="font-semibold">Free slot 2</h3>
                   <p className="text-gray-500 text-sm">20 January 2024</p>
                   <p className="text-green-600">9:00 PM - 10:00 PM</p>
                 </div>
               </div>
   
               {/* Date & Time */}
               <div className="mb-4">
                 <h3 className="text-gray-700 font-semibold mb-2">Date & Time</h3>
                 <input
                   type="date"
                   className="w-full border border-gray-300 rounded-lg p-3 mb-2 focus:outline-none focus:border-blue-500"
                 />
                 <div className="flex gap-4">
                   <select className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500">
                     <option>Indian Timezone</option>
                   </select>
                   <select className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500">
                     <option>Indian Timezone</option>
                   </select>
                 </div>
               </div>
   
               {/* Location */}
               <input
                 type="text"
                 placeholder="Choose location"
                 className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:border-blue-500"
               />
   
               {/* Add Participants */}
               <div className="mb-4">
                 <h3 className="text-gray-700 font-semibold mb-2">Add participants</h3>
                 <div className="flex space-x-2">
                   <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                     <span>👤</span>
                   </div>
                   <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                     <span>👤</span>
                   </div>
                   <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                     <span>👤</span>
                   </div>
                   <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                     +
                   </button>
                 </div>
               </div>
   
               {/* Repeating Options */}
               <div className="mb-4">
                 <h3 className="text-gray-700 font-semibold mb-2">Repeating</h3>
                 <div className="flex space-x-2">
                   {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(day => (
                     <button
                       key={day}
                       className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
                     >
                       {day}
                     </button>
                   ))}
                 </div>
               </div>
   
               {/* Save & Cancel Buttons */}
               <div className="flex justify-end space-x-2">
                 <button
                   onClick={closeModal}
                   className="px-6 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
                 >
                   Cancel
                 </button>
                 <button
                   onClick={closeModal}
                   className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                 >
                   Save
                 </button>
               </div>
             </div>
           </div>
         )}
       </div>
      )}
    </div>
  );
};

const MeetingCard: React.FC<{ timeLeft: string; location: string }> = ({ timeLeft, location }) => (
  <div className="border rounded-lg p-4 shadow-sm bg-white">
    <h3 className="text-lg font-semibold text-green-600">Brainstorming session</h3>
    <p className="text-sm text-gray-600 mb-1">12:30 PM → 04:36 PM IST ({timeLeft})</p>
    <p className="text-sm text-gray-500">
      {location} <a href="#" className="text-blue-500">Get location</a>
    </p>
    <div className="flex mt-3 space-x-4 text-blue-500 text-sm">
      <button>🌦 Weather information</button>
      <button>🔍 Check booking status</button>
    </div>
  </div>
);

const MeetingProposalCard: React.FC<{ isFree: boolean }> = ({ isFree }) => (
  <div className="border rounded-lg p-4 shadow-sm bg-white">
    <h3 className="text-lg font-semibold text-green-600">Brainstorming session</h3>
    <p className="text-sm text-gray-600 mb-1">
      12:30 PM → 04:36 PM IST <span className="text-blue-500">{isFree ? '(Free Slot)' : '(Not Free)'}</span>
    </p>
    <div className="flex justify-between mt-4">
      <button className="text-green-500 hover:bg-green-100 rounded-lg px-4 py-1">Accept</button>
      <button className="text-red-500 hover:bg-red-100 rounded-lg px-4 py-1">Reject</button>
    </div>
  </div>
);

export default Cards;
