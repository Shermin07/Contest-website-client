import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const AllContest = () => {
  const allDatas = useLoaderData();
  console.log(allDatas)
  const navigate = useNavigate();

  const handleDetailsClick = (contestId) => {
  
    sessionStorage.setItem('previousLocation', window.location.pathname);

  
    navigate(`/contest/${contestId}`);
  };

  return (
    <div>
      <h1 className="text-center font-center text-2xl">All contest</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {allDatas?.map((allData) => (
          <div key={allData._id} className="card card-compact h-[450px] bg-base-100 shadow-xl">
            <figure className='ObjectId'><img src={allData.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Contest name: {allData.contestName}</h2>
              <p><span className='font-bold'>Participants: </span>{allData.participants}</p>
              <p><span className='font-bold'>Description: </span>{allData.description}</p>
              <div className="card-actions">
              
                <Link onClick={handleDetailsClick} to={`/contest/${allData._id}`} className="btn btn-primary">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllContest;
