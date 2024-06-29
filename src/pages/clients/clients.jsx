import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/header';


function Clients() {
    const [clients,setClients] = useState(JSON.parse(localStorage.getItem('clients')) || [
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
    ])
    const [currClient,setCurrClient] = useState();
    const [view,setView] = useState(false);
    
    const handleStart=(client)=>{
        setCurrClient(client);
        setView(!view);
    }

  return (
    <div className='bg-orange-100 w-full h-full flex flex-col'>
        <Header/>
        <div className='bg-white m-5 mt-2 h-[90%] p-5 rounded-md space-y-5'>
            <h2 className='text-xl text-orange-500 font-semibold'>Clients</h2>
            <div className='p-5 flex flex-row flex-wrap gap-5'>
                {
                    clients.map((client,index)=>(
                        <div key={index} className='bg-orange-400 text-white p-4 rounded-md w-[20%] font-semibold space-y-3'>
                            <h2 className=''>{client.name}</h2> 
                            <h2>{client.age} yrs</h2>
                            <h2>Attended:{client.attended}</h2>
                            <button 
                            className='px-1 bg-white rounded-md text-orange-400'
                            onClick={()=>handleStart(client)}
                            key={index}>
                            Start Session</button>
                        </div>
                    ))
                }
            </div>
        </div>
        {
            view &&
            <div className='absolute bg-orange-100 text-orange-500 p-3 h-[200px] w-[400px] rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='border-2 border-orange-300 border-dashed h-full rounded-md p-4 space-y-2'>
                    <p className='font-semibold text-lg'>Would you like to start session with,</p>
                    <div className='flex flex-col justify-center items-center h-1/2 my-auto space-y-2'>
                        <h2 className='flex font-bold text-2xl w-full justify-center'>{currClient.name}</h2>
                        <div className='flex gap-5 w-full justify-center'>
                            <Link 
                            to='/session'
                            className='px-2 rounded-md bg-orange-500 text-white'
                            onClick={()=>{
                                localStorage.setItem('currClient',JSON.stringify(currClient));
                            }}
                            >Start</Link>
                            <button
                             className='px-2 rounded-md bg-red-600 text-white'
                             onClickCapture={()=>{
                                setView(!view)
                                setCurrClient(null);
                             }}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default Clients