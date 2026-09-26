import React, { useState } from 'react'
const Checkboxes = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isConti, setIsConti] = useState(false);
    return (
        <div className='border-2 border-yellow-500 h-auto w-100 m-3 p-2'>
            <div className='mt-2'>Checkboxes</div>

            <label className='ml-4'>
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={(e) => {
                        const checked = e.target.checked;
                        setIsChecked(checked);
                        if (!checked) {
                            setIsConti(false);
                        }
                    }}
                    className='mt-4'
                />
                Accept the terms and conditions
            </label>

            <p className={`ml-2 mt-2 text-sm ${isChecked ? "text-green-600" : "text-red-600"}`}>
                {isChecked ? 'Terms accepted' : 'Please accept the terms'}
            </p>
            <button disabled={!isChecked} className='border-2 rounded-md p-1 hover:bg-blue-200 hover:text-black transition-colors duration-200 text-sm m-2 disabled:opacity-40 disabled:cursor-not-allowed'
                onClick={() => setIsConti(true)}
            >
                Continue
            </button>

            {isChecked && (<p className='text-sm m-2'>
                {isConti ? "You can now continue!" : ""}
            </p>)}
        </div>
    )
}
export default Checkboxes;