import React from 'react'
import { useState,useEffect } from 'react'
import pic from './components/client.png'
import { useNavigate } from 'react-router-dom'
function Session() {
  const[currClient,setCurrClient] = useState(JSON.parse(localStorage.getItem('currClient')) || {
    id:1,
    name:'Vishnu Vardhan',
    age:21,
    attended:0,
    notes:[]
  })
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

  useEffect(() => {
    localStorage.setItem('currClient', JSON.stringify(currClient));
  }, [currClient]);
  
  const [notes,setNotes] = useState([]);
  const [point,setPoint] = useState("");
  const navigate = useNavigate();
  const [view,setView] = useState(false);

  const addPoint=()=>{
    if(point.trim()!=='')
    {
      const newNotes=[...notes,point];
      setNotes(newNotes);
      console.log(newNotes);
    }
    setPoint("");
  }

  const handleSessionEnd=()=>{
    setView(!view);
  }

  const handleEND=()=>{
    const clientUpdate={
      ...currClient,
      attended:currClient.attended+1,
      notes:[...currClient.notes,notes]
    }
    const updatedClients=clients.filter((existingclient)=>{
    return existingclient.id !== currClient.id
    })

    const newClients = [clientUpdate,...updatedClients];
    setClients(newClients);
    localStorage.setItem('clients',JSON.stringify(newClients));
    navigate('/');
  }

  return (
    <div className='w-screen h-screen bg-orange-200 p-3 flex gap-4'>
      {/* Session image */}
      <div className='p-4 bg-white h-full w-2/3 relative rounded-md'>

        <div className='text-xl font-semibold text-orange-500 flex justify-between'>
          <h2>{currClient.name}'s Session {currClient.attended+1}</h2>
          <button
           className='px-1 bg-red-500 text-white rounded-md'
           onClick={handleSessionEnd}
           >END SESSION</button>
        </div>

        <div className=' w-full h-[96%] p-5 border-2 border-orange-200 border-dashed flex flex-col items-center justify-center'>
          <img src={pic} alt="image"/>
          <h2>Patient video</h2>
        </div>

        <div className='absolute top-[6.5%] right-[1%] h-[200px] w-[200px] p-3 bg-orange-100 rounded-md '>
          <img src={pic} alt=""/>
        </div>

      </div>

      {
        view && 
        <div className='absolute bg-orange-100 text-orange-500 p-3 h-[200px] w-[400px] rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='border border-orange-300 border-dashed h-full p-4 flex- justify-center items-center'>
            <h2>Would you like to <strong>END SESSION</strong></h2>
            <div className='flex items-center justify-center h-full gap-5'>
              <button
               className='px-3 bg-green-500 text-white p-1 rounded-md'
               onClick={handleEND}>YES</button>
              <button
               className='px-3 bg-red-500 text-white p-1 rounded-md'
               onClick={handleSessionEnd}
              >NO</button>
            </div>
          </div>
        </div>
      }

      {/* Session Notes */}
      <div className='bg-white h-full w-1/3 rounded-md p-5'>

        <h2 className='text-2xl text-orange-500 border-2 border-white border-b-orange-500 w-full'>Notes</h2>
        
        <div className='h-[88%] overflow-hidden overflow-y-scroll'>
          <ul className='p-2 space-y-2 list-disc text-orange-500'>
          {
            notes.map((note,index)=>(
              <li className='px-1 list-inside rounded-md' key={index}>{note}</li>
            ))
          } 
          </ul>
        </div>

        <div className='gap-2 flex'>
          <input
           type="text" 
           value={point} 
           onChange={(e)=>setPoint(e.target.value)} 
           className=' w-[90%] py-1 px-1 focus:outline-none border-orange-400 border-2 rounded-md'
          />
          <button
           className='bg-orange-500 text-white px-2 rounded-md p-1'
           onClick={addPoint}
           >Add</button>
        </div>

      </div>
    </div>
  )
}

export default Session