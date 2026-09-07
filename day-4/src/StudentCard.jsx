import React from 'react'
const StudentCard = ({student}) => {
  return (
    <>
      <h2>{student.name}</h2>
      <p>ID: {student.id}</p>
    </>
  )
}

export default StudentCard