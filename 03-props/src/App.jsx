import React from 'react'
import Card from './components/Card'

const  App = () => {
  return (
    <div className='parent'>
      <Card name='jagan' age={21} img="https://img.freepik.com/premium-photo/best-amazing-wonderful-this-photo-take-this-picture-your-work-ai-generated-top-lovely-photo_1169327-105130.jpg"/>
      <Card name='akash' age={21} img="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?cs=srgb&dl=cascade-clouds-cool-wallpaper-210186.jpg&fm=jpg"/>
    </div>
  )
}

export default  App
