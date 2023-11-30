import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageContests = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/dashboard/manageContests')
      .then(response => {
        setContests(response.data);
      })
      .catch(error => {
        console.error('Error fetching contest data:', error);
      });
  }, []);

  const handleDeleteContest = (contestId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this contest!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/dashboard/manageContests/${contestId}`)
          .then(response => {
            setContests(prevContests => prevContests.filter(contest => contest._id !== contestId));
            Swal.fire('Deleted!', 'The contest has been deleted.', 'success');
          })
          .catch(error => {
            console.error('Error deleting contest:', error);
            Swal.fire('Error!', 'An error occurred while deleting the contest.', 'error');
          });
      }
    });
  };

  const handleConfirmContest = (contestId) => {
  
    axios.post(`http://localhost:5000/dashboard/manageContests/confirm/${contestId}`)
      .then(response => {
      
        console.log(response);
      })
      .catch(error => {
        console.error('Error confirming contest:', error);
      });
  };

  return (
    <div>
      <h2 className='text-center text-3xl font-bold mt-3 mb-5'>Manage Contests</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest, index) => (
              <tr key={contest._id}>
                <th>{index + 1}</th>
                <td>{contest.title}</td>
                <td>{contest.description}</td>
                <td>{contest.status}</td>
                <td>
                  <button onClick={() => handleDeleteContest(contest._id)} className='btn'>
                    Delete
                  </button>
                  <button onClick={() => handleConfirmContest(contest._id)} className='btn'>
                    Confirm
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

export default ManageContests;
