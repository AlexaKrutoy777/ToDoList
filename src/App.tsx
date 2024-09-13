import { useState } from 'react'
import { Base }from './components/Base.tsx'
import { Title } from './components/Title.tsx'
import { Task } from './components/Task.tsx'
import back from '../public/background.png'
import { CreateTask } from './components/CreateTask.tsx'

function App() {


  return (
    <div>
      <img src={back} className='absolute -z-10 w-screen h-screen top-0 selection:bg-none'/>
      <Title>
      </Title>
      <Base>
      <CreateTask/>
        <Task/>
      </Base>
    </div>
  )
}

export default App
