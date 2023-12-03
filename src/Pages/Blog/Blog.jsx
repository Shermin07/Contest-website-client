import { Helmet } from "react-helmet";


const Blog = () => {
    return (
        <div className="mb-7">
          <Helmet>
          <title>a12-contest | Blogs</title>
        </Helmet>
          <h1 className="text-3xl font-bold text-center text-cyan-900">Blogs</h1>
         <div className="card bg-cyan-900 text-white p-3 mx-2 mt-8 mb-4">
 
    <h2 className="card-title mb-3">1. Coding Challenge:</h2>
    <p> 
Title: "Mastering the Coding Challenge: Strategies for Success"<br></br>
In this article, we delve into effective strategies for tackling coding challenges. From time management to debugging techniques, discover the secrets to excel in competitive coding. </p>
  
 
</div>
         <div className="card mx-2 mt-8  bg-cyan-900 text-white p-3 ">
 
    <h2 className="card-title mb-3">2. Math Olympiad:</h2>
    <p> 
Title: "Unraveling the Beauty of Math: A Journey through Olympiad Problems"<br></br>
Embark on a mathematical journey as we explore intriguing problems from Math Olympiads. Uncover the elegance behind solutions and how these competitions inspire a love for pure mathematics. </p>
  
 
</div>
         <div className="card mx-2 mt-8  bg-cyan-900 text-white p-3 ">
 
    <h2 className="card-title mb-3">3. Science Fair:</h2>
    <p> 
    Title: "From Hypothesis to Discovery: Navigating the Science Fair Adventure"<br></br>
Join us in understanding the essence of a science fair project. From formulating a hypothesis to crafting an engaging presentation, learn how to make your mark in the world of scientific exploration.
 </p>
  
 
</div>
         <div className="card mx-2 mt-8  bg-cyan-900 text-white p-3 ">
 
    <h2 className="card-title mb-3">4. Artistic Expression:</h2>
    <p>

    Title: "Beyond the Canvas: Expressive Art in a Digital Age"<br></br>
Explore the diverse realm of artistic expression, from traditional paintings to digital masterpieces. This article celebrates the fusion of technology and creativity, showcasing how artists redefine boundaries.
    </p>
  
 
  <div className="card mx-2 mt-8  bg-cyan-900 text-white p-3 ">
 
    <h2 className="card-title mb-3">5. Quiz Bowl:</h2>
    <p>
    Title: "Thriving in the Quiz Bowl Arena: Tips for Team Triumph"<br></br>
Dive into the world of Quiz Bowl competitions, where quick thinking and teamwork reign supreme. Discover strategies for effective collaboration and how to keep your cool under the pressure of rapid-fire questions.
    </p>
  
 
</div>
 
         <div className="card mx-2 mt-8  bg-cyan-900 text-white p-3 ">
 
    <h2 className="card-title mb-3">6. Robotics Challenge:</h2>
    <p>
    Title: "Minds and Machines: Crafting the Future through Robotics Challenges"<br></br>
Explore the evolution of robotics challenges and their impact on technological innovation. From problem-solving to designing autonomous robots, this article delves into the fascinating intersection of minds and machines.
    </p>
  
 
</div>
       
        </div>
          </div>
    );
};

export default Blog;