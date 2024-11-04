import React from 'react'
import Calendar from './calender'
import Sidebar1 from '../sidebar1'

const Page = () => {
    return (
        <div>

            <div className="flex">
                <Sidebar1 />


                <div className='w-full h-full'>
                   <Calendar />
                    
                </div>




            </div>
        </div>
    )
}

export default Page
