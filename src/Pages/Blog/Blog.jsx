import { Helmet } from "react-helmet";


const Blog = () => {
    return (
        <div className="mb-7">
         
           <Helmet>
          <title>a12-contest | Blogs</title>
        </Helmet>
          <h1 className="text-3xl font-bold text-center text-cyan-900">Blogs</h1>
         <div className="card bg-cyan-900 text-white p-3 mx-2 mt-8 mb-4">
 
    <h2 className="card-title mb-3">Q: What is one way data building?</h2>
    <p> <span className="font-bold">Ans:</span> One-way data binding is a data flow model used in many front-end frameworks and libraries, such as React, Angular, and Vue. In one-way data binding, data flows in one direction, from the data source to the user interface (UI) elements. </p>
  
 
</div>
         <div className="card mx-2 mt-8  bg-cyan-900 text-white p-3 ">
 
    <h2 className="card-title mb-3">Q: What is NPM in node.js?</h2>
    <p> <span className="font-bold">Ans:</span> In Node.js, npm stands for "Node Package Manager."  It is a package manager and dependency management tool that comes bundled with Node.js when you install it.npm is a fundamental tool for Node.js development, making it easy to manage dependencies and streamline the development process. </p>
  
 
</div>
         <div className="card mx-2 mt-8  bg-cyan-900 text-white p-3 ">
 
    <h2 className="card-title mb-3">Q: Difference between Mongodb database vs mySQL database?</h2>
    <p> <span className="font-bold">Ans:</span> MongoDB and MySQL have significant differences in terms of their data models, architecture, and use cases Here's a comparison of MongoDB and MySQL: <br></br>


    <div className="overflow-x-auto mt-6">
  <table className="table">
    {/* head */}
    <thead className="text-white text-xl font-bold">
      <tr>
        <th></th>
       
        <th>MongoDB</th>
        <th>MySQL</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>MongoDB is a NoSQL database, which means it <br></br>uses a document-oriented data model.</td>
        <td>MySQL is a relational database management system (RDBMS), where data is organized into tables<br></br> with predefined schemas, and relationships between tables are maintained through foreign keys.</td>
      
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>MongoDB: MongoDB is schema-less, allowing documents in the same collection to have different fields. This flexibility is well-suited for applications where the data structure evolves over time.</td>
        <td>MySQL enforces a fixed schema, meaning that the table structure must be defined upfront. Any changes to the schema may require altering tables or creating new ones.</td>
      
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>MongoDB: MongoDB uses a flexible and powerful query language that supports various queries, including JSON-based queries, geospatial queries, and full-text search.</td>
        <td> MySQL uses SQL (Structured Query Language) for querying data. It is highly structured and well-suited for complex join operations.</td>
      
      </tr>
    </tbody>
  </table>
</div>
    
     </p>
  
 
</div>
        </div>
    );
};

export default Blog;