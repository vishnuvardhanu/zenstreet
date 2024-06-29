import React from 'react'
import { Link } from 'react-router-dom'
import '../components/side.css'

function Sidebar() {
  return (
    <div id='sidebar' className='w-[18%] bg-orange-400 text-white h-full'>
        <h2 className='p-2 font-bold text-xl'>
            ZenStreet Care
        </h2>
        <div className='flex flex-col w-full justify-center items-center h-3/5 text-xl space-y-3'>
            <Link to='/home'>Home</Link>
            <Link to='/notes'>Notes</Link>
        </div>
    </div>
  )
}

export default Sidebar