import React from 'react'
import { useState } from 'react'

const Student = () => {

    const [list, setList] = useState([
        { id: 1, name: 'kishan' },
        { id: 2, name: 'Ashwin' },
        { id: 3, name: 'Harry' }
    ]);

    const [name,setName] = useState("");

    const handleAdd = () =>{
        const newList = {
            id:list.length+1,
            name:name,
        }
        setList([...list,newList]);
        setName("");
    }

    return (
        <>
            {list.map((students) => (
                <div key={students.id}>
                    <h1>{students.name}</h1>
                    <button>Edit</button>
                </div>
            ))}
            <br></br>
            <input type='text'
            placeholder='Enter your name'
            onChange={(e)=>setName(e.target.value)}
            value={name}
            />
            <button onClick={handleAdd}>Add</button>
        </>
    )
}

export default Student