import { useLoaderData } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CreatedContest = () => {
   
   const createdData = useLoaderData();
   console.log(createdData);

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
        <th></th>
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
      </tr>
     
        
        )}
    
      
    
    
    </tbody>
  
  
    
  </table>
</div> 
        </div>
    );
};

export default CreatedContest;