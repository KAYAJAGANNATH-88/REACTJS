import React from 'react'

const Cards = (props) => {
  return (
    <>
    <h1>Job Openings</h1>
      <div className="card">
        <div>
        <div className="top">
          <img src={props.logo}></img>
          <button>Save</button>
          
        </div>
        <div className="middle">
          <h3>{props.company} <span>{props.posted}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h3>{props.tag1}</h3>
            <h3>{props.tag2}</h3>
          </div>
        </div>
        </div>
        <div className='bottom'>
          <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
          </div>
          <button>Buy Now</button>
        </div>
      </div>
    </>
  )
}

export default Cards
