import React from 'react'
import { useState } from 'react'
import StudentCard from './StudentCard'
const StudentSearch = () => {

    const [student, setStudent] = useState([
        { id: 1, name: "Kishan" },
        { id: 2, name: "Ashwin" },
        { id: 3, name: "Harry" },
        { id: 4, name: "Sabreen" },
        { id: 5, name: "Jeevitha" }
    ])

    return (
        <>
            <h1>Student Search</h1>
            {student.map((students)=>(
                <h1>{students.name}</h1>
            ))}
            <StudentCard/>
        </>
    )
}

export default StudentSearch