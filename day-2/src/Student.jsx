import React, { useState } from 'react'

const Student = () => {
    const [list, setList] = useState([
        { id: 1, name: "kishan" },
        { id: 2, name: "Ashwin" },
        { id: 3, name: "Sridar" },
    ]);

    const [name, setName] = useState("");

    const handleAdd =()=> {
        const newList = {
            id: list.length+1,
            name : name,
        }
        setList([...list,newList]);
        setName("");
    }
    return (
        <>
            <h1>Student list</h1>
            {list.map((student) => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                </div>
            ))}

            <input type='text'
                   onChange={(e)=>setName(e.target.value)}
                   value={name}
                   placeholder='Enter the name...'
            />

            <button onClick={handleAdd}>Add</button>
        </>
    )
}

export default Student