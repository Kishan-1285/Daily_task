import React, { useState } from 'react'

const StudentSorting = () => {
    const [students, setStudents] = useState([
        { id: 1, name: "Kishan", age: 23 },
        { id: 2, name: "Ashwin", age: 22 },
        { id: 3, name: "Jeevitha", age: 21 },
        { id: 4, name: "Harry", age: 22 },
        { id: 5, name: "Sabreen", age: 21 }
    ])

    const [sortBy, setSortBy] = useState("name");

    const [order, setOrder] = useState("asc");

    // const numbers = [5, 2, 8, 1, 4];
    // const sortedNumbers = numbers.sort();
    // console.log("sortedNumbers:", sortedNumbers);
    // console.log("numbers:", numbers);
    // const sortedStudents = students.sort((a, b) => a.age - b.age);

    //sorting by age 
    // const sortedStudents = [...students].sort((a, b) => a.age - b.age);

    //sorting by name
    // const sortedStudent = [...students].sort((a, b) => a.name.localeCompare(b.name));
     
    const sortedStudent = [...students].sort((a,b)=>{
        if(sortBy=="name"){
            return order==="asc" ? 
            a.name.localeCompare(b.name) :
            b.name.localeCompare(a.name);
        }else{
            return order === "asc" ? 
            a.age - b.age :
            b.age - a.age;
        }
    });

    // const sortValue = sortBy === 'name' ? sortedStudent : sortedStudents;

    // console.log("sortedStudents:", sortedStudents);
    // console.log("students:", students);
    
    return (
        <>
            <h1>Student List</h1>
            {students.map((student) => (
                <div key={student.id}>
                    <h2>{student.name}</h2>
                    <h3>{student.age}</h3>
                </div>
            ))}

            <h1>Sorted Student List</h1>
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                {/* <option value='All'>All</option> */}
                <option value='name'>Name</option>
                <option value='age'>Age</option>
            </select>
            <select
                value={order}
                onChange={(e) => setOrder(e.target.value)}
            >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            {sortedStudent.map((student) => (
                <div key={student.id}>
                    <h2>{student.name}</h2>
                    <h3>{student.age}</h3>
                </div>
            ))}
        </>
    )
}

export default StudentSorting