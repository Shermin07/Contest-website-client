// Details.js


import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

const Details = () => {

const {id} = useParams()
console.log(id)

const [details, setDetails] = useState(null);
console.log(details)
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:5000/home/${id}`);
            const data = await res.json();
         //  console.log(data)
            setDetails(data)
        }
        fetchData()

    }, [id])

 
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Contest Details</h1>

      {details && (
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={details.image} alt="topic image" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Contest Name: {details.contestName}</h2>
            <p>
              <span className="font-bold">Participants:</span> {details.attemptedCount
}
            </p>
            <p>
              <span className="font-bold">Prize Money:</span> {details.priceMoney}tk
            </p>
           
            <p>
              <span className="font-bold">Description: </span>
              {details.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
