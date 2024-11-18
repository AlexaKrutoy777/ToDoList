import React, { ChangeEvent, useState } from 'react';
import { ITask } from "../models";
import axios from "axios";


const taskData:ITask = {
    id: 0,
    text: 'Hellow world',
  }
  
  interface CreateTaskProps {
    onCreate: (task:ITask) => void;
  }
  
export function CreateTask({ onCreate }: CreateTaskProps) {

    const[value, setValue] = useState('');
    const[hover, setHover] = useState(true);
    const[active, setActive] = useState(false);  
    
    const submitHandler = async(event: React.FormEvent) => {
        event.preventDefault();
    
        taskData.text = value;
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQyNTk0MjMxLTllZTEtNDQ3MC04NjM0LTAxYmUxYzY0ODZmYiIsImlhdCI6MTczMTk0OTYxOSwiZXhwIjoxNzM0NTQxNjE5fQ.crLhUwNOqcIRImxSVOscqM_4P9x6D8k0aM3C80cEOUQ';
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
      const response = await axios.get<ITask>('http://localhost:8000/api/task/', config);
    
        onCreate(response.data);
      }
    
      const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      }
    


    return (
        <form onSubmit={submitHandler} className='py-2 px-4 bg-white rounded-md my-5 min-h-18 max-h-18 flex justify-between'>
            <input type="text"  value={value} onChange={changeHandler} className="px-3 py-3 text-lg  rounded-lg text-[#3b6472] focus:outline-none w-4/6 selection:bg-sky-300" placeholder="New Task"></input>
            <button type='submit' className="rounded-full w-14 h-14 relative bg-sky-400" style={{ background: hover ? "#38bdf8" : "#2b83c3", backgroundColor: active ? "#0a7eb1": "#38bdf8"}} 
        onMouseEnter={() => {setHover(false)}}
        onMouseLeave={() => {setHover(true)}}
        onMouseDown={() => {setActive(true)}}
        onMouseUp={() => {setActive(false)}}

         onClick={async() => {
        const token2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQyNTk0MjMxLTllZTEtNDQ3MC04NjM0LTAxYmUxYzY0ODZmYiIsImlhdCI6MTczMTk0OTYxOSwiZXhwIjoxNzM0NTQxNjE5fQ.crLhUwNOqcIRImxSVOscqM_4P9x6D8k0aM3C80cEOUQ';
            const config2 = {
                headers: { Authorization: `Bearer ${token2}` }
            }
            const reqBody = {
                text: value
            }
          await axios.post("http://localhost:8000/api/task/add", reqBody, config2)
          await axios.get<ITask[]>('http://localhost:8000/api/task/', config2);
          
        }}
        >
             <div className="w-2 h-10 absolute left-6 bottom-2 rounded-md bg-white"></div>
             <div className="w-10 h-2 absolute top-6 right-2 rounded-md bg-white"></div>
             
        </button>
        </form>
    )
}