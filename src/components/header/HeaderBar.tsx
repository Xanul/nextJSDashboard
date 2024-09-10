import React from 'react'

interface Props {
  title?: string
  subTitle?: string
  description?: string
}

export const HeaderBar = (props:Props) => {
  
  const { title, subTitle, description } = props;

  return (
    <div className='p-4'>
      <h1 className='text-4xl font-bold ml-2'>{title}</h1>
      <span className='text-2xl text-blue-500 font-bold ml-2'>{subTitle}</span>
      <div className="bg-white shadow-lg px-5 py-3 mt-2 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50">
        <p className='text-black text-justify font-sans md:text-xl'>{description}</p>
      </div>
    </div>
  )
}
