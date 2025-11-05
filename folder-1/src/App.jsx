
import React from 'react'

const App = () => {
  function input(elem){
    if(elem>0)
    {
      console.log("scrolling down",elem);
    }else{
       console.log("scrolling up",elem);
    }
    
  }
  return (
     <div onWheel={(elem)=>
     input(elem.deltaY)}>
      <div className='box1'></div>
      <div className='box2'></div>
      <div className='box3'></div>
      </div>
  )
}

export default App
