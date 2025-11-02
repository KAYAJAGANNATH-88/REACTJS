import React from 'react'
import Card from './component/Card.jsx';
const App = () => {
  const user='jagannath'
  return (
    <div>
      <h1> hello {user}</h1>
      {Card()}
      <Card />
    </div>
    
    
  )
}

export default App
