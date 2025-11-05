import React from 'react'

const App = () => {
  const submit=(e)=>{
    e.preventDefault()
    console.log('Form Submitted');
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submit(e);
      }}>
        <input type="text" placeholder='Enter your Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
