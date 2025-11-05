import React from 'react'
import RightCards from './RightCards'
import './RightText.css'
const RightText = (props) => {
  return (
    <div className=' rounded-2xl overflow-x-auto gap-10 h-full w-2/3  p-6 flex justify-content-center hide-scrollbar'>
      {props.users.map(function(elem,idx){
        return<RightCards key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} color={elem.color}/>
      })}
    </div>
  )
}

export default RightText
