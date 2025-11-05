import React from 'react'
import RightCardContent from './RightCardContent'

const RightCards = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 bg-amber-50 rounded-4xl'>
      <img className='h-full w-full object-cover rounded-4xl' src={props.img}/>
      <RightCardContent color={props.color} tag={props.tag} id={props.id}/>
    </div>
  )
}

export default RightCards
