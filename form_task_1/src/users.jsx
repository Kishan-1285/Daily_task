import { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editingUsers, setEditingUsers] = useState(null);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/users/${id}`
      );

      console.log(response.data);

      setUsers(users.filter((user) => user.id !== id));

    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/users/${editingUsers.id}`,
        editingUsers
      );

      console.log(response.data);

      setUsers((currentUsers) =>
        currentUsers.map((user) =>
          user.id === editingUsers.id
            ? editingUsers
            : user
        )
      );
      setEditingUsers(null);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/users'
        );

        console.log(response.data);
        setUsers(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='border-2 border-yellow-500 p-5 rounded-lg w-96 mt-10'>

      <h1>Users</h1>

      {editingUsers && (
        <div className="border-2 border-blue-500 p-5 rounded-lg mt-5">

          <h2>Edit User</h2>

          <input
            className="border"
            value={editingUsers.name}
            onChange={(e) =>
              setEditingUsers({
                ...editingUsers,
                name: e.target.value
              })
            }
          />

          <input
            className="border"
            value={editingUsers.email}
            onChange={(e) =>
              setEditingUsers({
                ...editingUsers,
                email: e.target.value
              })
            }
          />

          <input className='border'
            value={editingUsers.age}
            onChange={(e) =>
              setEditingUsers({
                ...editingUsers,
                age: e.target.value
              })
            } />

          <label>Gender</label>

          <input
            type="radio"
            value="Male"
            checked={editingUsers.gender === "Male"}
            onChange={(e) =>
              setEditingUsers({
                ...editingUsers,
                gender: e.target.value
              })
            }
          />
          <label>Male</label>

          <input
            type="radio"
            value="Female"
            checked={editingUsers.gender === "Female"}
            onChange={(e) =>
              setEditingUsers({
                ...editingUsers,
                gender: e.target.value
              })
            }
          />
          <label>Female</label>

          <label>Course</label>

          <select
            value={editingUsers.course}
            onChange={(e) =>
              setEditingUsers({
                ...editingUsers,
                course: e.target.value
              })
            }
          >
            <option value="">Select Course</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="AIDS">AIDS</option>
            <option value="CSBS">CSBS</option>
          </select>

          <input className='border'
            value={editingUsers.address}
            onChange={(e) =>
              setEditingUsers({
                ...editingUsers,
                address: e.target.value
              })
            } />

          <button
            className="border rounded ml-2"
            onClick={handleUpdate}
          >
            Update
          </button>

          <button
            className="border rounded ml-2"
            onClick={() => setEditingUsers(null)}
          >
            Cancel
          </button>

        </div>
      )}

      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <div
              key={user.id}
              className='border-2 border-yellow-500 p-5 rounded-lg mt-10'
            >
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.age}</p>
              <p>{user.gender}</p>
              <p>{user.course}</p>
              <p>{user.address}</p>



              <button
                onClick={() => setEditingUsers(user)}
                className="border-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(user.id)}
                className='border-2 rounded'
              >
                Delete
              </button>
            </div>
          ))}
        </>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default Users;