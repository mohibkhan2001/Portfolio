import React from 'react'
import ImgIcon from '../assets/Images/Icons/rocket.png'
const AboutCards = () => {
  return (
    <>
   
   <div className="icon border w-3/5 p-4 flex flex-col gap-4 rounded-lg border-gray-500">
        <img src={ImgIcon} alt="rocket"  className='w-8'/>
        <p className='font-primaryBold text-lg'>Title Here</p>
        <p className='font-primary text-sm'>Description Here</p>
   </div>
 </>
  )
}

export default AboutCards