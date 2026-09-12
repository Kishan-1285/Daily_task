import React, { useState } from 'react'                     

const StudentFilter = () => {
    const [students, setStudents] = useState([
        { id: 1, name: "Kishan", category: "CSE", year: 4 },
        { id: 2, name: "Ashwin", category: "CSE", year: 3 },
        { id: 3, name: "Jeevitha", category: "ECE", year: 4 },
        { id: 4, name: "Sabreen", category: "ECE", year: 3 },
        { id: 5, name: "Harry", category: "IT", year: 2 },
        { id: 6, name: "Sridar", category: "EEE", year: 2 }
    ])

    const [category, setCategory] = useState("All");

    const [year, setYear] = useState("All");

    const filteredStudent = students.filter((student) => {
        return (category === "All" || student.category === category) && (year === "All" || student.year === Number(year));   
    })

    return (
        <>
            <h1>Student List</h1>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="All">All</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="IT">IT</option>
            </select >

            <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
            >
                <option value="All">All Years</option>
                <option value="2">Year 2</option>
                <option value="3">Year 3</option>
                <option value="4">Year 4</option>
            </select >

            {filteredStudent.length===0 ? 
                  <p>No Students found</p> :
                filteredStudent.map((student) => (
                    <div key={student.id}>
                        <h3>{student.name}</h3>
                        <h5>{student.category}</h5>
                        <h5>{student.year}</h5>
                    </div>
                ))
            }
        </>
    )
}
export default StudentFilter