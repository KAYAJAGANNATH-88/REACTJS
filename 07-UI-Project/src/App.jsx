import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
const App = () => {
  const users=[
    {
      img:'https://img.freepik.com/premium-photo/professional-males-colleagues-hd-8k-wallpaper-stock-photographic-image_1033957-29162.jpg?w=2000',
      intro:'',
      color:'blue',
      tag:'satisfied'
    },
    {
      img:'https://images.picxy.com/cache/2019/7/19/08f772304c2baaa8e7c2f6c028d2a740.jpg',
      intro:'',
      color:'lightgreen',
      tag:'underserved'
    },
    {
      img:'https://img.freepik.com/premium-photo/elegant-professional-indian-businesswoman_975188-40802.jpg',
      intro:'',
      color:'blue',
      tag:'underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App
