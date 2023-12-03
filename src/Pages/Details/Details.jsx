import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {

  
  const { id } = useParams();
  const [detailsData, setDetailsData] = useState();
  console.log(detailsData) ;

  useEffect(() => {
    fetch(`https://a12-contest-website-server.vercel.app/dashboard/participated/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetailsData(data);
      });
  }, [id]);

  return (
    <div>
      <h1 className='text-center text-2xl font-bold'>Contest Details</h1>

      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={detailsData?.image} alt="topic image" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Contest Name: {detailsData?.contestName}</h2>
          <p><span className='font-bold'>Participants:</span> {detailsData?.participants}</p>
          <p><span className='font-bold'>Prize Money:</span> {detailsData?.priceMoney}tk</p>
          <p><span className='font-bold'>Deadline: </span> {detailsData?.deadline}</p>
          <p><span className='font-bold'>Description: </span>{detailsData?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
