import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/sidebar'
const clients =[
    {
        id:1,
        name:'Vishnu Vardhan',
        age:21,
        attended:0,
        notes:[]
    },
    {
        id:2,
        name:'Sandeep',
        age:19,
        attended:0,
        notes:[]
    },
]
localStorage.setItem('clients', JSON.stringify(clients));

function Dashboard() {
  return (
    <div className='flex h-screen w-screen'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Dashboard