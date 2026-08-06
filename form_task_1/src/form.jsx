import { useState } from "react";
function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
        course: "",
        address: "",
    });

    const handlechange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    // const handleEmailchange = (e) => {
    //     setFormData({
    //         ...formData,
    //         email: e.target.value
    //     });
    // }

    // const handleAgechange = (e) => {
    //     setFormData({
    //         ...formData,
    //         age: e.target.value
    //     });
    // }

    // const handleGenderchange = (e) =>{
    //     setFormData({
    //         ...formData,
    //         gender:e.target.value
    //     })
    // }

    // const handleCoursechange = (e)=>{
    //     setFormData({
    //         ...formData,
    //         course:e.target.value
    //     })
    // }

    // const handleAddresschange =(e)=>{
    //     setFormData({
    //         ...formData,
    //         address:e.target.value
    //     })
    // }

    return (
        <>
            <h1>{formData.name}</h1>
            <h1>{formData.email}</h1>
            <h1>{formData.age}</h1>
            <h1>{formData.gender}</h1>
            <h1>{formData.course}</h1>
            <h1>{formData.address}</h1>

            <form className="border-2 border-blue-500 p-5 rounded-lg w-96 mt-10">
                <label>Name</label>
                <input placeholder="Enter your name" onChange={handlechange} name='name' value={formData.name} className="border ml-5"/>
                <br /><br />

                <label>Email</label>
                <input placeholder="Enter your email" onChange={handlechange} name='email' value={formData.email} className="border ml-5"/>
                <br /><br />

                <label>Age</label>
                <input placeholder="Enter your age" type="number" onChange={handlechange} name='age' value={formData.age} className="border ml-5"/>
                <br /><br />

                <label>Gender</label>
                <input type="radio" name="gender" value="Male"  onChange={handlechange} className="border ml-5"/>
                <label>Male</label>
                <input type="radio" name="gender" value="Female" onChange={handlechange} className="border ml-5"/>
                <label>Female</label>
                <br /><br />

                <label>Course</label>
                <select onChange={handlechange} name="course"className="border ml-5" >
                    <option value='CSE'>CSE</option>
                    <option value='ECE'>ECE</option>
                    <option value='AIDS'>AIDS</option>
                    <option value='CSBS'>CSBS</option>
                </select>
                <br /><br />

                <label>Address</label>
                <textarea rows="4" cols="30" onChange={handlechange} name="address " className="border ml-5"></textarea>
                <br/><br/>

                <button className="border rounded-lg flex-center">Submit</button>

            </form>


        </>
    )
}
export default Form