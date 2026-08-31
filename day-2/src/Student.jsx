import React from 'react';
import { useState } from 'react';
const Student = () => {
    const [list, setList] = useState([
        { id: 1, name: "kishan" },
        { id: 2, name: "Ashwin" },
        { id: 3, name: "Harry" }
    ]);
    const [name, setName] = useState("");

    const handleAdd = () =>{
        const newList={
            id:list.length+1,
            name:name,
        }
        setList([...list,newList]);
        setName("");
    }

    return (
        <>
            <h1>List  </h1>

            {list.map((students) => (
                <div key={students.id}>
                    <h2>{students.name}</h2>
                </div>
            ))}

            <input type='text'
                onChange={(e) => setName(e.target.value)}
                value='kishan'
                placeholder='Enter your name'/>

            <button onClick={handleAdd}>Add</button>

        </>
    )
}

export default Student