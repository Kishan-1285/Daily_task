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

    const handleNamechange = (e) => {
        setFormData({
            ...formData,
            name: e.target.value
        });
    }

    const handleEmailchange = (e) => {
        setFormData({
            ...formData,
            email: e.target.value
        });
    }

    const handleAgechange = (e) => {
        setFormData({
            ...formData,
            age: e.target.value
        });
    }

    const handleGenderchange = (e) =>{
        setFormData({
            ...formData,
            gender:e.target.value
        })
    }

    const handleCoursechange = (e)=>{
        setFormData({
            ...formData,
            course:e.target.value
        })
    }

    const handleAddresschange =(e)=>{
        setFormData({
            ...formData,
            address:e.target.value
        })
    }

    return (
        <>
            <h1>{formData.name}</h1>
            <h1>{formData.email}</h1>
            <h1>{formData.age}</h1>
            <h1>{formData.gender}</h1>
            <h1>{formData.course}</h1>
            <h1>{formData.address}</h1>

            <form>
                <label>Name</label>
                <input placeholder="Enter your name" onChange={handleNamechange} value={formData.name} />
                <br /><br />

                <label>Email</label>
                <input placeholder="Enter your email" onChange={handleEmailchange} value={formData.email} />
                <br /><br />

                <label>Age</label>
                <input placeholder="Enter your age" type="number" onChange={handleAgechange} value={formData.age} />
                <br /><br />

                <label>Gender</label>
                <input type="radio" name="gender" value="Male" onChange={handleGenderchange} />
                <label>Male</label>
                <input type="radio" name="gender" value="Female" onChange={handleGenderchange} />
                <label>Female</label>
                <br /><br />

                <label>Course</label>
                <select onChange={handleCoursechange} >
                    <option value='CSE'>CSE</option>
                    <option value='ECE'>ECE</option>
                    <option value='AIDS'>AIDS</option>
                    <option value='CSBS'>CSBS</option>
                </select>
                <br /><br />

                <label>Address</label>
                <textarea rows="4" cols="30" onChange={handleAddresschange}></textarea>
                <br/><br/>

                <button>Submit</button>

            </form>


        </>
    )
}
export default Form