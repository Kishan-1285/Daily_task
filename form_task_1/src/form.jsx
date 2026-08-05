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
    return (
        <>
            <form>
                <label>Name</label>
                <input placeholder="Enter your name" value={formData.name} />
                <br/><br/>

                <label>Email</label>
                <input placeholder="Enter your email" value={formData.email}/>
                <br/><br/>

                <label>Age</label>
                <input placeholder="Enter your age" value={formData.age}/>
                <br/><br/>

                <label>Gender</label>
                <input type="radio" name="gender"/>
                <label>Male</label>
                <input type="radio" name="gender"/>
                <label>Female</label>
                <br/><br/>
    
                <label>Course</label>
                <select>
                    <option>CSE</option>
                    <option>ECE</option>
                    <option>AIDS</option>
                    <option>CSBS</option>
                </select>
                <br/><br/>

                <label>Address</label>
                <textarea rows="4" cols="30"></textarea>

            </form>


        </>
    )
}
export default Form