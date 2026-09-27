import React, { useState } from 'react'
const Forms = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    const [submittedData, setSubmittedData] = useState(null);

    return (
        <div className='border-2 w-100 h-auto m-2 p-1'>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(formData);
                
            }}>
                <h1 className=' p-2 text-lg font-medium text-red-600'>Registration form</h1>
                <label>
                    Enter your name :
                    <input
                        type='text'
                        value={formData.name}
                        name='name'
                        onChange={(e) => setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                        })}
                        className='text-md m-2 border-2 border-blue-400 rounded-md p-1 w-60 h-10'
                    />
                </label>
                <br></br>
                <label>
                    Enter your email :
                    <input
                        type='email'
                        value={formData.email}
                        name='email'
                        onChange={(e) => setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                        })}
                        className='text-md m-2 border-2 border-blue-400 rounded-md p-1 w-60 h-10'
                    />
                </label>
                <button className='m-2 border-3 border-green-300 rounded-full p-1 font-medium w-20'>Submit</button>
            </form>
        </div>
    )
}

export default Forms