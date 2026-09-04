import React from 'react'
import { useState } from 'react'
const Student = () => {
    const [list, setList] = useState([
        { id: 1, name: 'kishan' },
        { id: 2, name: 'Ashwin' },
        { id: 3, name: 'Harry' }
    ]);

    const [name, setName] = useState("");

    const [editId, setEditId] = useState(null);

    const handleAdd = () => {
        const newList = {
            id: list.length + 1,
            name: name,
        }
        setList([...list, newList]);
        setName("");
    }

    const handleEdit = (id) => {
        const selectedStudent = list.find(
            (student) => student.id === id
        );
        setName(selectedStudent.name);
        setEditId(id);
    }

    const handleUpdate = () => {
        const updatedList = list.map((student) => {
            if (student.id === editId) {
                return {
                    ...student,
                    name: name,
                };
            }
            return student;
        });
        setList(updatedList);
    };

    return (
        <>
            <h1>List</h1>
            {list.map((students) => (
                <div key={students.id}>
                    <h1>{students.name}</h1>
                    <button onClick={() => handleEdit(students.id)}>Edit</button>
                </div>
            ))}
            <br></br>
            <input type='text'
                placeholder='Enter your name'
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            {editId === null ? (
                <button onClick={handleAdd}>Add</button>
            ) : (
                <button onClick={handleUpdate}>Update</button>
            )}
        </>
    )
}
export default Student