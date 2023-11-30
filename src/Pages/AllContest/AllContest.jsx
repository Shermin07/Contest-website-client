import { Link, useLoaderData, useLocation } from "react-router-dom";


const AllContest = () => {
    const allDatas = useLoaderData() ;
    const location = useLocation()
    console.log(allDatas)
    return (
        <div>
          <h1 className="text-center font-center text-2xl">All contest</h1>  


          <div>
            {
                allDatas?.map((allData) =>
                <div key={allData._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={allData.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{allData.contestName}</h2>
                  <p>{allData.description}</p>
                  <div className="card-actions ">
                    <Link to='/login' className="btn btn-primary" >Details</Link>
                 
                  </div>
                </div>
              </div>  
                
                )
            }
          </div>
        </div>
    );
};

export default AllContest;