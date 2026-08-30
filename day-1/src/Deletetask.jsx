import React from "react";
import { useState } from "react";

const Deletetask = () => {
  const [student, setStudent] = useState([
    { id: 1, name: "kishan" },
    { id: 2, name: "Ashwin" },
    { id: 3, name: "harry" },
  ]);

 const handleDelete = (id)=>{
    const confirmDelete = window.confirm("Are you sure that you want to delete?");
    if(confirmDelete){
        setStudent(student.filter((students)=>students.id!==id))}
    }

  return (
    <div>
      <h1>Student List</h1>

      {student.map((studentName) => (
        <div key={studentName.id}>
          <h2>{studentName.name}</h2> 
          <button onClick={()=>handleDelete(studentName.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Deletetask;