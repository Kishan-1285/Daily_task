import React, { useState } from 'react'

const Checkboxes = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <div className='mt-2'>Checkboxes</div>
            <label className='ml-4'>
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className='mt-4'
                />
                Accept the terms and conditions
            </label>
            <p className={`ml-2 mt-2 text-sm ${isChecked ? "text-green-600" : "text-red-600"}`}>{isChecked ? 'Terms accepted' : 'Please accept the terms'}</p>
            <button disabled={!isChecked} className='border-2 rounded-md p-1 hover:bg-blue-200 hover:text-black transition-colors duration-200 text-sm m-2 disabled:opacity-40 disabled:cursor-not-allowed'>
                Continue
            </button>
        </>
    )
}

export default Checkboxes;