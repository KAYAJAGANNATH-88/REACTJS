import React, { useState } from 'react'

const App = () => {
  //const [num, setnum] = useState([10,20,30]);
  //const btn=()=>{
  //  const newnum=[...num];
  //  newnum.push(40);
  //  setnum(newnum);
  //}

  //batch update:
  const [num, setnum] = useState(10);
  const btn1=()=>{
    setnum(prev=>(prev+1));
    setnum(prev=>(prev+1));
    setnum(prev=>(prev+1));
  }
  return (
    //<div>
    //  <h1>{num}</h1>
    //  <button onClick={btn}>click</button>
    //</div>

    <div>
      <h1>{num}</h1>
      <button onClick={btn1}>click</button>
    </div>
  )
}

export default App
