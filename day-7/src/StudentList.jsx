import React, { useState } from 'react'

const StudentList = () => {
    const [students, setStudents] = useState([
        { id: 1, name: "Kishan", category: "CSE", year: 4 ,age:22},
        { id: 2, name: "Ashwin", category: "CSE", year: 3 ,age:21},
        { id: 3, name: "Jeevitha", category: "ECE", year: 4 ,age:20},
        { id: 4, name: "Sabreen", category: "ECE", year: 3 ,age:20},
        { id: 5, name: "Harry", category: "IT", year: 2 ,age:21},
        { id: 6, name: "Sridar", category: "EEE", year: 2 ,age:23}
    ])
    return (
        <>
            <h1>Student Management List</h1>
            {students.map((student)=>(
                <div>
                    <h2>{student.name}</h2>
                    <h3>{student.category}</h3>
                    <h3>{student.age}</h3>
                </div>
            ))}
        </>
    )
}

export default StudentList