import React from 'react'
import Navbar from './navbar'
import Center from './center'
const Section1 = (props) => {
  return (
    <>
    <div className='h-screen w-full'>
      <Navbar/>
      <Center users={props.users}/>
    </div>
    </>
  )
}

export default Section1
