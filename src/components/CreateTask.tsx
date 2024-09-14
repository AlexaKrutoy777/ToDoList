import React, { Children, createElement, useState } from 'react';
import { AddButton } from './AddButton';



export function CreateTask() {

const [inputValue, setInputValue] = useState('');

    return (
        <div className='py-2 px-4 bg-white rounded-md my-5 min-h-18 max-h-18 flex justify-between'>
            <input value={inputValue} onChange={(event) => {setInputValue(event.target.value)}} className="px-3 py-3 text-lg  rounded-lg text-[#3b6472] focus:outline-none w-4/6 selection:bg-sky-300" placeholder="New Task"></input>
            <AddButton task = {inputValue}>
            </AddButton>
        </div>
    )
}