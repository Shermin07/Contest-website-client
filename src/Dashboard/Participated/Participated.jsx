import { useLoaderData } from "react-router-dom";


const Participated = () => {

    const participatedData = useLoaderData();
    console.log(participatedData)
   // console.log(participatedData.deadline);
// sorted by deadline:
   const sortedParticipatedData = [...participatedData].sort(
    (a, b) => new Date(a.deadline) - new Date(b.deadline)
  );





    return (
        <div>
         <h2 className="text-center text-2xl font-extrabold">My Participated Contest</h2>

         
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        Image
        </th>
        <th>Contest name</th>
        <th>AttemptedCount</th>
        <th>Description</th>
        <th>Deadline</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
   {
    sortedParticipatedData?.map(participated => 
        <tr key={participated._id}>
        <th>
        <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={participated.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </th>
        <td>
          <div className="flex items-center gap-3">
          
            <div>
              <div className="font-bold">{participated.contestName}</div>
              <div className="text-sm opacity-50"></div>
            </div>
          </div>
        </td>
        <td>
        {participated.attemptedCount}
          <br/>
         
        </td>
        <td>{participated.description}</td>
        <th>
        <div>{new Date(participated.deadline).toLocaleString()}</div>
        </th>
      </tr>
        
        
        
        )
   }

     
    
     
    </tbody>
  
   
    
  </table>
</div>
        </div>
    );
};

export default Participated;