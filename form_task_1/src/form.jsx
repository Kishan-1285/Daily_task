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

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
        course: "",
        address: ""
    });

    const [loading,setLoading] = useState(false);

    const handlechange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: ""
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("form is submitted");
        const newErrors = {
            name: "",
            email: "",
            age: "",
            gender: "",
            course: "",
            address: ""
        };

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const namePattern = /^[A-Za-z ]+$/;

        if (formData.name === "") {
            newErrors.name = "*name is required"
        }else if(!namePattern.test(formData.name)){
            newErrors.name="Enter a valid name"
        }
        if (formData.email === "") {
            newErrors.email = "email is required"
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }
        if (formData.age === "") {
            newErrors.age = "age is required"
        }else if(formData.age < 15 || formData.age > 85){
            newErrors.age = "Enter a valid age"
        }
        if (formData.address === "") {
            newErrors.address = "address is empty"
        }
        if (formData.course === "") {
            newErrors.course = "course is empty"
        }
        if (formData.gender === "") {
            newErrors.gender = "gender is empty"
        }

        setErrors(newErrors);
        // if (formData.name === "" ||
        //     formData.age === "" ||
        //     formData.email === "" ||
        //     formData.address === "" ||
        //     formData.gender === "" ||
        //     formData.course === ""
        // ) {
        //     alert("Please Enter all the fields");
        //     return;
        // }
        if (Object.values(newErrors).some(error => error !== "")) {
            return;
        }

        setLoading(true);

        console.log(formData);

        setFormData({
            name: "",
            email: "",
            age: "",
            gender: "",
            course: "",
            address: "",
        })
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

            <form className="border-2 border-yellow-500 p-5 rounded-lg w-96 mt-10" onSubmit={handleSubmit}>
                <label>Name</label>
                <input placeholder="Enter your name" onChange={handlechange} name='name' value={formData.name} className="border ml-5" />
                {errors.name && (
                    <p className="text-red-500">
                        {errors.name}
                    </p>
                )}
                <br /><br />

                <label>Email</label>
                <input placeholder="Enter your email" onChange={handlechange} name='email' value={formData.email} className="border ml-5" />
                {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                )}
                <br /><br />

                <label>Age</label>
                <input placeholder="Enter your age" type="number" onChange={handlechange} name='age' value={formData.age} className="border ml-5" />
                {errors.age && (
                    <p className="text-red-500">{errors.age}</p>
                )}
                <br /><br />

                <label>Gender</label>
                <input type="radio" name="gender" value="Male" onChange={handlechange}  checked={formData.gender === "Male"} className="border ml-5" />
                <label>Male</label>
                <input type="radio" name="gender" value="Female" onChange={handlechange}  checked={formData.gender === "Female"} className="border ml-5" />
                <label>Female</label>
                {errors.gender && (
                    <p className="text-red-500">{errors.gender}</p>
                )}
                <br /><br />

                <label>Course</label>
                <select onChange={handlechange} name="course" value={formData.course} className="border ml-5" >
                    <option value="">Select Option</option>
                    <option value='CSE'>CSE</option>
                    <option value='ECE'>ECE</option>
                    <option value='AIDS'>AIDS</option>
                    <option value='CSBS'>CSBS</option>
                </select>
                {errors.course && (
                    <p className="text-red-500">{errors.course}</p>
                )}
                <br /><br />

                <label>Address</label>
                <textarea rows="4" cols="30" onChange={handlechange} value={formData.address} name="address" className="border ml-5"></textarea>
                {errors.address && (
                    <p className="text-red-500">{errors.address}</p>
                )}
                <br /><br />

                <button disabled={loading} className="border rounded-lg flex flex-center " >
                    {loading? "Submitting..." : "submit"}
                </button>

            </form>


        </>
    )
}
export default Form