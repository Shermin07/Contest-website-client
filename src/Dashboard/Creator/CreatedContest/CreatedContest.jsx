import {  useLoaderData } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const CreatedContest = ({ contests, isAdmin }) => {
   
   const createdData = useLoaderData();
  // console.log(createdData);
  const navigate = useNavigate();
  

  const handleSubmit = async (contestId) => {
    try {
     
      const contestToSubmit = createdData.find(data => data._id === contestId);

      const response = await fetch(`https://a12-contest-website-server.vercel.app/dashboard/createdContest/${contestId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contestToSubmit),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Submission successful:', data.data);
    
        navigate('/dashboard/contestSubmittedPage');
      } else {
        console.error('Submission failed:', data.message);
      }
    } catch (error) {
      console.error('Error submitting contest:', error);
    }
  };



    return (
        <div>
       <h2 className="text-center font-bold text-3xl mt-4">My Created Contests</h2> 

    <div className="overflow-x-auto mt-6 ml-20 w-full ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Contest Name</th>
        <th>Contest Type</th>
        <th>Price Money</th>
        <th>Edit</th>
        <th>Delete</th>
        <th>Submit</th>
      </tr>
    </thead>
    <tbody>

      {createdData?.map(data =>   <tr key="data._id">
        <th>
          <label>
           {data.contestName}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={data.image} />
              </div>
            </div>
            <div>
              <div className="font-bold">{data.contestType
}</div>
            
            </div>
          </div>
        </td>
        <td>
        {data.priceMoney
}
          <br/>
       
        </td>
        <td><FaRegEdit /></td>
        <th>
        <MdDelete />
        </th>
        <th  ><button onClick={() => handleSubmit(data._id)}>Submit</button></th>
      </tr>
     
        
        )}
    
      
    
    
    </tbody>
  
  
    
  </table>
</div> 
        </div>
    );
};

export default CreatedContest;