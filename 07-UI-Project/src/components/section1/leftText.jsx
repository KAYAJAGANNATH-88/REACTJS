import React from 'react'

const leftText = () => {
  return (
    <div className='rounded-2xl h-full flex flex-col justify-between w-1/3 bg-blue-50'>
      <div className='p-6'>
        <h3 className='mb-7 text-4xl font-bold'>Prospective <br/><span className='text-gray-500'>customer</span><br/>segmentation</h3>
        <p className='text-xl font-medium text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel nisi vero fugit quasi. Voluptatem.</p>
      </div>
      <div className='p-8 '>
        <img className='text-3xl h-8'src="https://cdn-icons-png.flaticon.com/512/56/56916.png"></img>
      </div>
    </div>
  )
}

export default leftText
