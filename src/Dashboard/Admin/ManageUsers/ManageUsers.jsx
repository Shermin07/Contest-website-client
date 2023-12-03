import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserShield } from 'react-icons/fa';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://a12-contest-website-server.vercel.app/manageUsers')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []); 

  const toggleUserRole = (userId) => {
    axios.post(`https://a12-contest-website-server.vercel.app/manageUsers/${userId}`)
      .then(response => {
        console.log(response);
        setUsers(prevUsers =>
          prevUsers.map(user =>
            user.uid === userId
              ? { ...user, role: 'admin' } // Update the role as needed
              : user
          )
        );
      })
      .catch(error => {
        console.error('Error toggling user role:', error);
      });
  };

  return (
    <div>
      <h2 className='text-center text-3xl font-bold mt-3 mb-5'>User Management</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.uid}>
                <th>{index + 1}</th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => toggleUserRole(user.uid)} className='btn'>
                    <FaUserShield />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
