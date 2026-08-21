import React, { useState } from "react";

function Todo() {

    const [data, setData] = useState([
        { id: 1, text: "Learn React" },
        { id: 2, text: "Practice JavaScript" },
        { id: 3, text: "Build a project" }
    ]);

    const [input, setInput] = useState("");
    const [empty, setEmpty] = useState("");
    const [EditingId, setEditingId] = useState(null);



    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const newTodo = {
        id: crypto.randomUUID(),
        text: input
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        if (input.trim() === "") {
            setEmpty("Enter a task");
            return;
        }
        setEmpty("");

        if(EditingId!==null){
            setData(
                data.map((todo)=>
                    todo.id===EditingId 
                        ?{...todo,text:input} 
                        : todo
            ));
            setEditingId(null);
            setInput("");
            return;
        }
        setData([...data, newTodo]);
        setInput("");
    }

    const handleEdit = (id) => {
        setEditingId(id);

        const todoToEdit = data.find((datas) => datas.id === id);

        setInput(todoToEdit.text);
    };

    const handleDelete = (id) => {
        setData(data.filter((datas) => datas.id !== id));
    }

    return (
        <>
            <ul className="border-2 border-purple-500 p-3 rounded-lg w-96 mt-10">
                {data.map((datas) => (
                    <li key={datas.id}>
                        {datas.text}
                        <button className="border-2 border-purple-500 rounded-lg" onClick={() => handleDelete(datas.id)}>Delete</button>
                        <button className="border-2 border-purple-500 rounded-lg" onClick={() => handleEdit(datas.id)}>Edit</button>
                    </li>
                ))}
            </ul>
            <br /><br />


            <input className="border-2 border-green-500 rounded-lg" value={input} onChange={handleChange} placeholder="Enter the task..." />
            <button className="border-2 border-purple-500 rounded-lg" onClick={handleUpdate}>
                {EditingId !== null ? "Update" : "Add"}
            </button>
            {empty && (<p className="text-red-500">{empty}</p>)}
        </>
    )
}

export default Todo