import { Helmet } from "react-helmet";
import Swal from "sweetalert2";


const AddContest = () => {


    const handleAddContest = e =>{
        e.preventDefault();

        const contestName = e.target.contestName.value ; 
        const price = e.target.price.value ; 
        const image = e.target.image.value ; 
        const description = e.target.description.value ; 
        const priceMoney = e.target.priceMoney.value ; 
        const deadline= e.target.deadline.value  ; 
        const taskSubmission = e.target.taskSubmission.value; 
        const contestType = e.target.contestType.value ;
        const  participants = e.target.participants.value ;
       
        console.log(contestName,image,price,description,priceMoney,deadline, taskSubmission,contestType,participants)

        const addContest = {
            contestName,   
            image,
            price,
            description,
            priceMoney,
            deadline,
             taskSubmission,
             contestType,
             participants
    
           }
           console.log(addContest)

           fetch('https://a12-contest-website-server.vercel.app/dashboard/addContest',{
            method :'POST',
            headers :{
                'content-type' :'application/json'
            },
            body:JSON.stringify(addContest)
           })
           .then(res => res.json())
           .then(data =>{
    
            if(data.insertedId){
               new Swal('Add Successfully Done')
            }
           // console.log(data)
           })

           
    }
    return (
        <div>


           <Helmet>
          <title>a12-contest | add contest</title>
        </Helmet>
        <h1 className="text-center text-3xl mt-3 mb-5">Add Contest</h1>
        
  <div className="hero-content bg-orange-900 ml-3  ">
   
    <div className="card  max-w-full ">
      <form onSubmit={handleAddContest} className="">
       <div className="grid grid-cols-1 md:flex gap-4">
       <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Contest Name</span>
          </label>
          <input type="text" placeholder="Contest Name" name="contestName" className="input w-[300px]  input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text text-white">Price</span>
          </label>
          <input type="text" placeholder="Price" name="price" className="input w-[300px] input-bordered" required />
        </div>
       </div>
       <div className="grid grid-cols-1 md:flex gap-4">
       <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Image</span>
          </label>
          <input type="text" placeholder="Image" name="image" className="input  w-[300px] input-bordered" required />
        
        </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Contest Description</span>
          </label>
          <input type="text" placeholder="Description"  
          name='description'className="input  w-[300px] input-bordered" required />
         
        </div>
       </div>
       <div className="grid grid-cols-1 md:flex gap-4">
       <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Price Money</span>
          </label>
          <input type="number" placeholder="Price Money" name='priceMoney'className="input  w-[300px] input-bordered" required />
        
        </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text text-white"> Contest Type </span>
          </label>
        
        
          <input type="text" placeholder="Contest Type" name="contestType" className="input  w-[300px] input-bordered" required />
        </div>
       </div>
      <div className="grid grid-cols-1 md:flex gap-4">
      <div className="form-control">
          <label className="label">
            <span className="label-text text-white"> Deadline</span>
          </label>
          <input type="date" placeholder="Deadline" name="deadline" className="input  w-[300px] input-bordered" required />
         
        </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text text-white"> Participants</span>
          </label>
          <input type="number" placeholder=" Participants" name="participants" className="input  w-[300px] input-bordered" required />
         
        </div>
      </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Task Submission text Instructions</span>
          </label>
         
          <textarea  type="text"  placeholder="Task Submission" name="taskSubmission"  className="textarea textarea-bordered required " ></textarea>
        </div>






        <div className="form-control mt-6">
          <button type="submit" className="btn ">Add Contest</button>
        </div>
      </form>
    </div>
  </div>

        </div>
    );
};

export default AddContest;