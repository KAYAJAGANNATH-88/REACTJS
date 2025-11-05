import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')

  const [task, settask] = useState([])
  const submithandler=(e)=>{
    e.preventDefault(e);
    const newtask=[...task];
    newtask.push({title,details})
    settask(newtask);
    settitle("");
    setdetails("");
  }
  const deleteNote=(idx)=>{
    const newtask=[...task];
    newtask.splice(idx,1)
    settask(newtask);
  }
  
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}className='flex items-start lg:w-1/2 p-10 flex-col gap-10'>

        <h1 className='text-xl font-bold'>Add Notes</h1>

        <input
        type='text'
        placeholder='Enter Notes Heading'
        className='px-5 py-2 w-full border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value);
        }}
        />
        <input 
        type="text"
        className='px-5 py-2 h-32 w-full border-2 flex items-start flex-row outline-none rounded'
        placeholder="Write Details"
        value={details}
        onChange={(e)=>{
          setdetails(e.target.value)
        }}
        />
        <button className='bg-white text-black w-full px-5 outline-none py-2 rounded active:scale-95'>Add Notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 bg-black p-10'>
      <h1 className='text-xl font-bold'> your notes</h1>
      <div className='flex flex-wrap flex-start justify-start gap-5 mt-5 h-full overflow-auto rounded-2xl'>
        {task.map(function(elem,idx){
          return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 rounded-2xl text-black pt-9 pb-4 px-4 bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/020/007/455/non_2x/green-torn-sticky-note-free-png.png")]'>
          <div>
            <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tighttext-sm font-medium text-gray-500'>{elem.details}</p>
          </div>
          <button onClick={()=>{
            deleteNote(idx)
          }}className='w-full bg-red-400 cursor-pointer active:scale-95 text-white text-xs rounded-2xl font-bold' >delete</button>
          </div>
        })}
        </div>
      </div>
    </div>
  )
}

export default App
