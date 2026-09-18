import React, { useState } from 'react'
const StudentList = () => {
    const [students, setStudents] = useState([
        { id: 1, name: "Kishan", category: "CSE", year: 4, age: 22 },
        { id: 2, name: "Ashwin", category: "CSE", year: 3, age: 21 },
        { id: 3, name: "Jeevitha", category: "ECE", year: 4, age: 20 },
        { id: 4, name: "Sabreen", category: "ECE", year: 3, age: 20 },
        { id: 5, name: "Harry", category: "IT", year: 2, age: 21 },
        { id: 6, name: "Sridar", category: "AIDS", year: 2, age: 23 }
    ]);

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");

    const [year, setYear] = useState("All");

    const filteredStudent = students.filter((student) => {
        return (student.name.toLowerCase().includes(search.toLowerCase()) &&
            (category === "All" || student.category === category) && 
            (year==="All" || student.year=== Number(year))
        );
    });

    return (
        <div className='border-3 m-4 w-150 p-4 rounded-md'>
            <h1 className="text-3xl font-bold mt-2 mb-4">Student Management List</h1>
            <h3 className='text-xl'>Search by name</h3>

            <input className='border-2 border-black-500 p-1 mt-3 w-60 h-10 rounded-md'
                placeholder='Search Student...'
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="grid grid-cols-2 gap-2 mt-3">
            
                <div>
                    <label className="block text-xl text-gray-300 mb-2 mt-4">
                        Filter by department
                    </label>
                    <select className='border-2 border-black-500 p-1 mt-2 w-60 h-10 rounded-md'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="AIDS">AIDS</option>
                        <option value="IT">IT</option>
                    </select>
                </div>
                <div>
                    <label className='block text-xl text-gray-300 mb-2 mt-4'>
                        Filter by year
                    </label>
                    <select className='border-2 border-black-500 p-1 mt-2 w-60 h-10 rounded-md'
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </div>
            {filteredStudent.length === 0 ?
                <p>No Students found </p> :
                filteredStudent.map((student) => (
                    <div key={student.id} className="text-2xl mt-3">
                        <h2 className='font-semibold'>{student.name}</h2>
                        <p className="text-gray-600 text-sm">
                            {student.category} · Age {student.age}
                        </p>
                    </div>
                ))}
        </div>
    )
}
export default StudentList