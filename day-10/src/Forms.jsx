import React, { useState } from 'react'
const Forms = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    const [submittedUsers, setSubmittedUsers] = useState([]);

    const [nameError, setNameError] = useState("");

    const [emailError, setEmailError] = useState("");

    return (
        <div className='border-2 w-100 h-auto m-2 p-1'>
            
            <form onSubmit={(e) => {
                e.preventDefault()
                {
                    if (formData.name.trim() === "") {
                        setEmailError("");
                        setNameError("Name is required");
                        return;
                    }
                    if (formData.email.trim() === "") {
                        // alert("email is required")
                        setNameError("");
                        setEmailError("E-mail is required");
                        return;
                    }
                }
                setSubmittedUsers((previousUsers) => [
                    ...previousUsers,
                    formData
                ]);

                setFormData({
                    name: "",
                    email: ""
                })
                setNameError("");
                setEmailError("");
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

                {nameError && (
                    <p className='font-sm text-red-400'>*{nameError}</p>
                )}

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

                {emailError && (
                    <p className='font-sm text-red-400'>*{emailError}</p>
                )}

                <button className='m-2 border-3 border-green-300 rounded-full p-1 font-medium w-20'>
                    Submit
                </button>

                <button className='m-2 border-3 border-green-300 rounded-full p-1 font-medium w-20'
                    type="button"
                    onClick={(e) => {
                        setFormData({
                            name: "",
                            email: ""
                        })
                    }}>
                    Clear
                </button>

            </form>

            {
                submittedUsers.map((user, index) => (
                    <div key={index}>
                        <p>{index + 1}.</p>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                ))
            }
            <button className='m-2 border-3 border-green-300 rounded-full p-1 font-medium w-30'
                type='button'
                onClick={(e) => {
                    setSubmittedUsers([]);
                }}
            >Clear the form
            </button>
        </div >
    )
}
export default Forms