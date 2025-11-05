import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')
  const submit=(e)=>{
    e.preventDefault()
    console.log('Form Submitted by',title);
    settitle('');
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submit(e);
      }}>
        <input 
        type="text" 
        placeholder='Enter your Name'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value);
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
