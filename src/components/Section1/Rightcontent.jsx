import React from 'react'
import Rightcard from './Rightcard'


const Rightcontent = (props) => {
  console.log(props.users)
  return (
    <div id='right' className='h-full p-6 w-2/3 flex flex-nowrap gap-4 overflow-x-auto '>
     { props.users && props.users.map(function(elem, index){
         return <Rightcard key={index} color={elem.color} img={elem.img}  id={index} tags={elem.tags} intro={elem.intro} />
      })}
      
      

    </div>
  )
}

export default Rightcontent
