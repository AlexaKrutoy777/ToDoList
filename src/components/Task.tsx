// import React from "react";
import { ITask } from "../models";


interface TaskProps {
    task: ITask
}

export function Task({task}: TaskProps) {
    return (
        <div className="px-4 py-2 border bg-sky-100 rounded-md my-5 text-black text-2xl border-none min-h-14 max-h-40">
            {task.title}
        </div>
    )
}