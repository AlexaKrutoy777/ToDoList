import React, { Children, createElement } from 'react';
import { AddButton } from './AddButton';



export function CreateTask() {

    return (
        <div className='py-2 px-4 bg-white rounded-md my-5 min-h-18 max-h-18 flex justify-between'>
            <input className="px-3 py-3 text-lg  rounded-lg text-[#3b6472] focus:outline-none w-4/6 selection:bg-sky-300" placeholder="New Task"></input>
            <AddButton>
            </AddButton>
        </div>
    )
}