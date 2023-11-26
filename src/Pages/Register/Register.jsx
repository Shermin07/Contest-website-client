/* eslint-disable no-undef */
import { useContext, useState } from 'react';
import { AiFillEyeInvisible,  AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('') ;

    const [registerSuccess, setRegisterSuccess] = useState('') ;
        const [showPassword, setShowPassword] = useState(false) ;


     const handleRegister = e =>{
        setRegisterError('');
        setRegisterSuccess('');
      
        e.preventDefault() ;
        const name = e.target.name.value ;
        const email = e.target.email.value ;
        const photo = e.target.photo.value ;
        const password = e.target.password.value ;
        console.log(name,email,photo, password)

        if(password < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
            Swal.fire('Password should be more than 6 charecters and one upper letter and a special cherecter')
            return ;
        }

        //create user
        createUser(email, password,photo,name)
        .then(result =>{
         toast('Your registration successfully done now please login');
        })
        .catch(error =>{
         toast('Already have an account, please login now') ;
           
        })
     }

    return (
       <div>
         <Helmet>
            <title>a12-contest | Register</title>
          </Helmet>
         <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
          <img className="w-[500px]" src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-8.jpg?size=626&ext=jpg&uid=R121205384&ga=GA1.1.732846257.1688661449&semt=ais"></img>
            
          </div>
          <div className="card flex-shrink-0 w-[650px] max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showPassword ? 'text' :'password'} name="password" placeholder="Password" className="input input-bordered" required />
                <span className="absolute mt-[51px] ml-[290px] md:mt-[51px] md:ml-[290px]" onClick={ () => setShowPassword(!showPassword)}>
      {
       showPassword?<AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>  } 
      </span>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            {
    registerError && <p className="ml-7 text-red-400 mb-3">{registerError}</p>
    
  }
  {
    registerSuccess && <p className="ml-7 text-green-700 mb-3">{registerSuccess}</p>
  }


  <p className="ml-7 mb-4">Already have an account? Please 
    <Link to='/login' className="text-teal-500 ml-2 font-bold"> Login</Link>
  </p>
  <ToastContainer />
          </div>
        </div>
      </div>
       </div>
    );
};

export default Register;