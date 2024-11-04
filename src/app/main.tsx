"use client"
import { useState } from 'react';
import Cards from './cards';
import Sidebar1 from './sidebar1';





const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [showMeetings, setShowMeetings] = useState<boolean>(true);
    const [showProposals, setShowProposals] = useState<boolean>(false);

    const handleDateChange = (date: string) => {
        setSelectedDate(date);
    };

    const handleMeetingsClick = () => {
        setShowMeetings(true);
        setShowProposals(false);
    };

    const handleProposalsClick = () => {
        setShowMeetings(false);
        setShowProposals(true);
    };

    return (
        <div className=" bg-gray-100">


            <div className="flex">
               <Sidebar1/>

                <main className="w-3/4 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center space-x-4 ">
                            <select className="border p-2 rounded-lg">
                                <option >All</option>
                                <option>Technician</option>
                                <option>Manager</option>
                            </select>
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => handleDateChange(e.target.value)}
                                className="border p-2 rounded-lg"
                            />
                        </div>

                        <div className="flex space-x-2">
                            {/* <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleMeetingsClick}>
                                Meetings
                            </button>
                            <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={handleProposalsClick}>
                                Proposals
                            </button> */}
                            <div className="flex items-center space-x-4">
                                <span className="cursor-pointer">🔔</span>
                                <span className="cursor-pointer">⚙️</span>
                                <span className="cursor-pointer">👤 Welcome!</span>
                            </div>
                        </div>
                    </div>

                    <section className="mb-6">

                        <div>
                            <div>
                                <Cards />
                            </div>
                        </div>


                    </section>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
