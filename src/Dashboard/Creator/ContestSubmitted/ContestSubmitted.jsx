import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const ContestSubmitted = () => {
  const submittedData = useLoaderData();
  const [winners, setWinners] = useState({});

  const declareWinner = (submissionId) => {
    setWinners((prevWinners) => ({
      ...prevWinners,
      [submissionId]: true, 
    }));
  };

  return (
    <div>
      <h2 className="text-center font-bold text-3xl mt-4">Contest Submitted Page</h2>

      <div>
        {submittedData.map((submission) => (
          <div key={submission._id}>
            <p>Participant Name: {submission.participantName}</p>
            <p>Email: {submission.email}</p>
            <p>Submitted Task: {submission.submittedTask}</p>

            <button
              onClick={() => declareWinner(submission._id)}
              disabled={winners[submission._id]}
            >
              Declare Winner
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContestSubmitted;
