import { useEffect, useState } from "react"
import { ITask } from "../models"
import axios from "axios"

export function useTasks() {

    const[tasks,setTasks] = useState<ITask[]>([])


    function addTask(task:ITask) {
        setTasks(prev => [...prev, task])
    }
    
    async function fetchTasks() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQyNTk0MjMxLTllZTEtNDQ3MC04NjM0LTAxYmUxYzY0ODZmYiIsImlhdCI6MTczMTk0OTYxOSwiZXhwIjoxNzM0NTQxNjE5fQ.crLhUwNOqcIRImxSVOscqM_4P9x6D8k0aM3C80cEOUQ';
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
      const response = await axios.get<ITask[]>('http://localhost:8000/api/task/', config);
      
      setTasks(response.data)
    }
    
    useEffect(() => {
        fetchTasks()
      
    }, [])
    return { tasks ,addTask, fetchTasks}
    
}