import { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

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