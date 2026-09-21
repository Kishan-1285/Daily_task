import React, { useState } from 'react'
const Toggle = () => {
    const [isActive, setIsActive] = useState(true);
    const [toggleCount, setToggleCount] = useState(0);
    return (
        <div className={`border-2 border-gray-500 m-3 w-[500px] p-3 rounded-md text-white ${isActive ? "bg-green-950" : "bg-red-950"
            }`}>
            <h1 className='text-3xl font-bold mb-4'>Toggle</h1>
            <p className="text-base mt-2 font-semibold">
                Current Status{" "}
                <span
                    className={`inline-block w-3 h-3 rounded-full mr-2 ${isActive ? "bg-green-400" : "bg-red-400"}`}
                ></span>
                <span className={isActive ? "text-green-400" : "text-red-400"}>
                    {isActive ? "Active" : "Inactive"}
                </span>
            </p>
            <button className='border-2 border-gray-500 rounded-md p-2  mt-3 hover:bg-gray-200 transition-colors duration-200 focus:ring-2  cursor-pointer active:scale-95 shadow-sm'

                onClick={() => {
                    setIsActive(!isActive);
                    setToggleCount(toggleCount + 1);
                }}>
                {isActive ? "Deactivate" : "Activate"}
            </button>
            <button
                className="border-2 border-white rounded-md p-2 mt-3 ml-2 hover:bg-white hover:text-black transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                disabled={isActive}
                onClick={() => {
                    setIsActive(true);
                    setToggleCount(0);
                }}
            >
                Reset
            </button>
            <p className={`mt-3 text-sm ${isActive ? "text-green-300" : "text-red-300"
                }`}>
                {isActive
                    ? "Your system is running normally."
                    : "Your system is currently disabled."}
            </p>
            {toggleCount > 0 && (<p className="mt-3 text-sm text-gray-300">
                Toggle Count: {toggleCount}
            </p>)}

        </div>
    )
}
export default Toggle