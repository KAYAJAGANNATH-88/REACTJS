import React from 'react'
import LeftText from './leftText'
import RightText from './RightText'
const center = (props) => {
  return (
    <div className='py-18 h-[90vh] bg-blue-50 px-18 flex items-center gap-10'>
      <LeftText/> 
      <RightText users={props.users}/>
    </div>
  )
}

export default center