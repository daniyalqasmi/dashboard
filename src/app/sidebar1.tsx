"use client"
import Link from 'next/link';
import React from 'react';
import { FiGrid, FiCalendar, FiMail, FiFileText, FiZap, FiUser } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-full p-4 bg-gray-50 shadow-lg">

      <h2 className="text-xl font-bold text-purple-600 mb-6">Company Logo</h2>


      <nav className="flex-1">
        <ul className="space-y-4">
          <Link href="/">
            <li className="flex items-center text-gray-600 hover:text-purple-600 cursor-pointer hover:pl-2 hover:text-lg">
              <FiGrid className="mr-2" />
              Dashboard
            </li>
          </Link>
          <Link href={"/Calendar"}>
            <li className="flex items-center text-gray-600 hover:text-purple-600 cursor-pointer   hover:pl-2 hover:text-lg">
              <FiCalendar className="mr-2" />
              Calendar
            </li>
          </Link>
        </ul>
      </nav>


      <div className="mt-8">
        <h3 className="text-sm text-gray-500 mb-2">Current View</h3>
        <div className="flex items-center justify-center border rounded-lg p-2 border-purple-200 text-purple-600">
          <FiUser className="mr-2" />
          Meetings
        </div>
      </div>


      <div className="mt-8">
        <div className="border rounded-lg p-4 bg-white shadow-md">
          <div className="flex items-center mb-2">
            <img src="#" alt="Calendar Icon" className="w-6 h-6 mr-2" />
            <p className="text-sm font-medium">Upcoming Event</p>
          </div>
          <p className="text-xs text-red-600 mb-1">Meeting with Prash...</p>
          <div className="flex items-center text-sm text-gray-600">
            <span>8:45 AM</span>
            <span className="mx-2">→</span>
            <span>10:45 AM</span>
          </div>
          <a
            href="#"
            className="mt-2 inline-block text-blue-500 text-xs flex items-center hover:underline"
          >
            <img src="#" alt="Google Meet Icon" className="w-4 h-4 mr-1" />
            Go to meet link
          </a>
        </div>
      </div>
    </div>
  );
};

const Sidebar1 = () => {
  return (
    <div className="flex">
      <Sidebar />


    </div>
  );
};

export default Sidebar1;
