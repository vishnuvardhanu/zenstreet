import React, { useState } from 'react'
import Header from '../components/header'

function Notes() {

  const clients = JSON.parse(localStorage.getItem('clients'))
  const [currClient,setCurrClient] = useState(clients[0]);

  const handleClient = (client)=>{
    setCurrClient(client);
  }
  return (
    <div className='bg-orange-100 w-full h-full flex flex-col'>
        <Header/>
        <div className='bg-white m-5 mt-2 h-[90%] p-5 rounded-md space-y-5'>
          <h2 className='text-2xl text-orange-500 border-2 border-white border-b-orange-500 w-full'>Notes</h2>
          
          <div className='flex w-full bg-orange-100 h-[91%] py-2'>
            <div className='w-1/4 overflow-hidden overflow-y-scroll flex flex-col px-4 space-y-2'>
              <h2 className='text-xl'>Clients</h2>
              {
                clients.map((client,index)=>(
                  <button
                   className='px-2 p-1 bg-orange-500 text-white rounded-md' 
                   onClick={()=>handleClient(client)}
                   >{client.name}</button>
                ))
              }
            </div>
            <div className='p-5 w-full'>
                  <h2 className='bg-white text-lg px-2 rounded-md text-orange-500 font-semibold mb-3'>{currClient.name}</h2>
                  <div className='w-full space-y-3 overflow-hidden overflow-y-scroll h-[95%]'>
                      {
                        currClient.notes.map((note, ind) => (
                          <div key={ind} className="p-2 space-y-2 text-orange-500 bg-white">
                            <div className='px-1 bg-white p-1 border border-white border-b-orange-400'>SESSION: {ind+1}</div>
                            {
                              note.map((point, index) => (
                                <li key={index} className="px-2 py-1 rounded-md">
                                  {point}
                                </li>
                              ))
                            }
                            {
                              note.length===0 && 
                              <div className='text-orange-300'>No Notes Taken</div>
                            }
                          </div>
                        ))
                      }
                      {
                        currClient.attended===0 && 
                        <div className='text-3xl font-bold text-orange-300 flex justify-center items-center'>
                          No session started
                        </div>
                      }
                  </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Notes