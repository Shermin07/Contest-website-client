import { useLocation, useParams, useNavigate, Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const ContestDetails = () => {
   const {user} = useContext(AuthContext)
   //console.log(user)
  const { contestId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [contestDetails, setContestDetails] = useState(null);
  

  useEffect(() => {
    fetch(`http://localhost:5000/dashboard/contestDetails/${contestId}`)
      .then((response) => response.json())
      .then((data) => setContestDetails(data))
      .catch((error) => console.error('Error fetching contest details:', error));
  }, [contestId]);

  



const handleRegistrationClick = async () => {
    try {
      const response = await fetch(`http://localhost:5000/dashboard/contestDetails/${contestId}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.uid }), 
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log(data.message);
        // Redirect to payment page or show a success message
      } else {
        console.error(data.message);
       
      }
    } catch (error) {
      console.error('Error registering for contest:', error);
    
    }
  };
  
 
  

  return (
    <div>
      <h1 className='text-center text-2xl font-bold'>Contest Details</h1>
  
      {contestDetails ? (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={contestDetails.image} alt="topic image" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Contest Name: {contestDetails.contestName}</h2>
            <p>Description: {contestDetails.description}</p>
            <p>Prize: {contestDetails.priceMoney}tk</p>
            <p>Deadline: {contestDetails.deadline}</p>
            <div className="card-actions">
              <Link className='btn' onClick={handleRegistrationClick} to='/paymentPage'>Registration</Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  
};

export default ContestDetails;
