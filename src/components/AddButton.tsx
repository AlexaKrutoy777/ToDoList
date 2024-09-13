import React, { useState } from "react";

const [value, setValue] = useState(0)


export function AddButton() {
    return (
        <div className="bg-sky-400 rounded-full w-14 h-14 relative hover:bg-sky-500 cursor-pointer active:bg-sky-400">
            <div className="w-11 h-2 bg-white rounded-lg absolute top-6 left-1.5"></div>
            <div className="h-11 w-2 bg-white rounded-lg absolute left-6 top-1.5"></div>
        </div>
    )
}