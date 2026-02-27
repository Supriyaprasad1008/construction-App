import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div className='absolute top-0 bottom-0 h-full w-full p-8 flex flex-col justify-between'>
                <h2 className='bg-white font-semibold text-3xl rounded-full h-10 w-10  flex justify-center items-center'>{props.id+1}</h2>
                <div>
                    <p style={{color:props.color}}className={`text-shadow-2xs absolute leading-tight bottom-85 font-mono left-4 right-4 mb-5 `}>{props.intro}</p>
                    <div>
                        <button style={{backgroundColor:props.color}} className='bg-blue-500 text-white font-medium px-8 py-2 rounded-full'>{props.tags}</button>
                        <button className='bg-blue-500 text-white px-3 py-2 font-medium rounded-full'><i className='ri-arrow-right-line'></i></button>
                    </div>
                </div>
            </div>
  )
}

export default Rightcardcontent
