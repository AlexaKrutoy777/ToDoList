import { Base }from './components/Base.tsx'
import { Title } from './components/Title.tsx'
import { Task } from './components/Task.tsx'
import back from '../public/background.png'
import { CreateTask } from './components/CreateTask.tsx'
import { useTasks } from './hooks/tasks'
import { ITask } from './models'

function App() {

  const { tasks ,addTask} = useTasks()

  const createHandler = (task: ITask) => {
    addTask(task)
  }

  return (
    <div>
      <img src={back} className='absolute -z-10 w-screen h-screen top-0 selection:bg-none'/>
      <Title>
      </Title>
      <Base>
      <CreateTask onCreate={createHandler}/>
      {tasks.map(task => <Task task={task} key={task.id}/>)}

      </Base>
    </div>
  )
}

export default App
