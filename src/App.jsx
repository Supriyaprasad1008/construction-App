import React from 'react'
import Section1 from './components/Section1/section1'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1652272161002-9c7247227270?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1aWxkZXJzfGVufDB8fDB8fHww',
      intro: 'Construction machines help make building work faster and easier. They are used for digging, lifting, mixing, and transporting materials. These machines improve efficiency and reduce manual labor on construction sites',
      tags: 'Smart Machines',
      color: 'blue'
    },
    {
      img: 'https://images.unsplash.com/photo-1614683361837-963af4039d58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uc3RydWN0aW9uJTIwcmVsYXRlZHxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'Building a tower starts with designing a strong plan and laying a solid foundation. The structure is then built floor by floor using steel and concrete. Finally, finishing work is completed to make the tower ready.',
      tags: 'Integrated Towers',
      color:'purple'
    },
    {
      img: 'https://images.unsplash.com/photo-1715760374522-a609a0c2f65e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D',
      intro: 'Room house infrastructure includes basic features like strong walls, flooring, electrical wiring, water supply, and proper ventilation. These elements ensure safety, comfort, and smooth daily living inside the house.',
      tags: 'Infrastructure',
      color:'orange'
    },
  ]

  return (
    <div>
      <Section1 users={users}/>
      
    </div>
  )
}

export default App
