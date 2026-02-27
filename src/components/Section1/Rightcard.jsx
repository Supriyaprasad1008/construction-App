import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
            <img className='w-full h-full object-cover' src={props.img} alt="" />
            <Rightcardcontent color={props.color} intro={props.intro} id={props.id} tags={props.tags} />
        </div>
    )
}

export default Rightcard
