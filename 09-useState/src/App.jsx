import React, { useState } from 'react'

const App = () => {
  //const [num, setNum]=useState(10); 
  //const [uservalue, setuserValue] = useState('jagan')
  //function change(){
  //  setNum(40);
  //  setuserValue('akash'); 
  //}

  const [num, setnum] = useState(0);
  function increase(){
    setnum(num+1);
  }
  function decrease(){
    setnum(num-1);
  }
  function clear(){
    setnum(0);
  }
  return (
    //<div>
    //  <h1>Value of a is {num}<br></br> value of user is {uservalue}</h1>
    //  <button onClick={change}>Click</button>
    //</div>
    <div className='body'>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={clear}>Clear</button>
    </div>
    
  )
}

export default App
