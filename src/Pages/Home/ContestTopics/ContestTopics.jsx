/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";


const ContestTopics = () => {
    const topicsData = useLoaderData();
    console.log(topicsData);
    return (

     <div>

        <h1 className="text-center font-extrabold text-3xl mb-4">Contest Topics </h1>
           <div className="grid grid-cols-1 md:grid-cols-2 h-[350px] lg:grid-cols-3 gap-3">
         {
            topicsData.map((topic) =><div className="card card-compact bg-base-100 shadow-xl">
            <figure className="object"><img src={topic.image} className="h-[250px] w-full" alt="contest topics" /></figure>
            <div className="card-body">
              <h2 className="card-title">Contest Name: {topic.contestName}</h2>
              <h3 className="font-semibold">Attempted: {topic.attemptedCount}</h3>
              <p className="font-semibold">Description: {topic.description}</p>
              <div className="card-actions justify">
                <button className="btn bg-orange-400 text-white">Details</button>
              </div>
            </div>
          </div> )
         }
        </div>
     </div>
    );
};

export default ContestTopics;