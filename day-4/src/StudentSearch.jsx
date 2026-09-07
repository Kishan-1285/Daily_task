import React, { useState } from 'react'
import StudentCard from './StudentCard'

const StudentSearch = () => {
    const [student, setStudent] = useState([
        { id: 1, name: "Kishan" },
        { id: 2, name: "Ashwin" },
        { id: 3, name: "Jeevitha" },
        { id: 4, name: "Harry" },
        { id: 5, name: "Sabreen" }
    ])

    const [search, setSearch] = useState("");

    const filteredStudent = student.filter((students) => {
        return students.name.toLowerCase().includes(search.toLowerCase());
    });

    // console.log(filteredStudent);

    return (
        <>
            <h1>Student Search</h1>
            <input
                type='text'
                placeholder='Search students'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={()=>setSearch("")}>Clear Search</button>
            {filteredStudent.length === 0 ? (
                <p>No students found</p>
            ) : (
                filteredStudent.map((students) =>(
                    <StudentCard
                        key={students.id}
                        student={students}
                    />
                ))
            )}
        </>
    )
}
export default StudentSearch