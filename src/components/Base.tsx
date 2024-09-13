import React from "react";

interface BaseProps {
    children: React.ReactNode
}

export function Base({children}: BaseProps) {
    return (
        <div className="bg-gradient-to-b from-sky-500 to-sky-300 px-4 py-2 m-auto w-1/3 min-h-96 max-h-96 my-10 rounded-md shadow-2xl ">
            <div>{children}</div>
        </div>
    )
}