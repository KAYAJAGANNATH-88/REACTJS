import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between '>
         <h1 className='h-10 w-10 flex justify-center items-center bg-white rounded-full'>{props.id+1}</h1>
        <div>
           <p className='text-xl leading-relaxed text-white mb-10'>Lorem ipsu dolor sit amet consectetur adipisicing elit. deleniti, reprehenderit corrupti perspiciatis amet quia?</p>
         <div className='flex justify-between'>
          <button style={{backgroundColor:props.color}}className=' text-white font-medium px-8 py-2 text-xl rounded-full'>{props.tag}</button>
          <button style={{backgroundColor:props.color}}className='px-8 py-2 rounded-full'><img className='rounded-3xl h-6 w-6 'src="https://th.bing.com/th/id/R.0673093bbfcecc10fc43a2e61243415c?rik=1pH9V0jCRyiRdQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2farrow-image-transparent%2farrow-image-transparent-9.png&ehk=tGpJQDxnJ%2bq7S2HVaT2wMHWwaLHTtpQ%2b%2baxiZvotuvY%3d&risl=&pid=ImgRaw&r=0"></img></button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
