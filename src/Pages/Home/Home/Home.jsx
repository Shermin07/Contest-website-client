

import Banner from "../Banner/Banner";
import ContestCreator from "../ContestCreator/ContestCreator";

import ContestTopics from "../ContestTopics/ContestTopics";
import ContestWinner from "../ContestWinner/ContestWinner";




const Home = () => {
    return (
        <div>
      <Banner></Banner>
      
      <ContestTopics></ContestTopics>
    
    
     <ContestWinner></ContestWinner>
    
      <ContestCreator></ContestCreator>
   
        </div>
    );
};

export default Home;