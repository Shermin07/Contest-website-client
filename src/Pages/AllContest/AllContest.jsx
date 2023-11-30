import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const AllContest = () => {
  const allDatas = useLoaderData();
  const navigate = useNavigate();

  const handleDetailsClick = (contestId) => {
  
    sessionStorage.setItem('previousLocation', window.location.pathname);

  
    navigate(`/contest/${contestId}`);
  };

  return (
    <div>
      <h1 className="text-center font-center text-2xl">All contest</h1>

      <div>
        {allDatas?.map((allData) => (
          <div key={allData._id} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={allData.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{allData.contestName}</h2>
              <p>{allData.description}</p>
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
