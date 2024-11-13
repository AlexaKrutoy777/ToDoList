import React, { useState } from "react";
import { Task } from "./Task";

interface TaskProps {
    task: string,
}



export function AddButton() {

  const[hover, setHover] = useState(true);
  const[active, setActive] = useState(false);
  return (
    <div        
    className="rounded-full w-14 h-14 relative bg-sky-400" style={{ background: hover ? "#38bdf8" : "#2b83c3", backgroundColor: active ? "#0a7eb1": "#38bdf8"}} 
        onMouseEnter={() => {setHover(false)}}
        onMouseLeave={() => {setHover(true)}}
        onMouseDown={() => {setActive(true)}}
        onMouseUp={() => {setActive(false)}}
        >
             <div className="w-2 h-10 absolute left-6 bottom-2 rounded-md bg-white"></div>
             <div className="w-10 h-2 absolute top-6 right-2 rounded-md bg-white"></div>
             
             
            {/* <div style={{ background: hover ? '#ADFF2F' : 'transparent', padding: '10px' }}></div> */}
        </div>
     )
}