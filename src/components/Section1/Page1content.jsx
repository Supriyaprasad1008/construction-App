import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='py-10 flex items-center justify-between gap-10 h-[90vh] px-18'>
      <Leftcontent/>
      <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content
