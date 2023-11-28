import { useLoaderData } from "react-router-dom";


const ContestSubmitted = () => {

    const submittedData = useLoaderData();
    console.log(submittedData)
   
    return (
        <div>
           <h1>hello</h1> 
        </div>
    );
};

export default ContestSubmitted;