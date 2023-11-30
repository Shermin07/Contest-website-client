import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible,  AiFillEye} from 'react-icons/ai'
import Swal from "sweetalert2";
import { AuthContext, auth } from '../../Provider/AuthProvider';

import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';


const Login = () => {
    const {signIn, signInWithGoogle} = useContext(AuthContext)
    //const {user, signIn,signInWithGoogle} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('') ;
    const [loginSuccess, setLoginSuccess] = useState('') ;
    const [showPassword, setShowPassword] = useState(false) ;
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e =>{
        setLoginSuccess('');
        setLoginError('');
        e.preventDefault();
       // console.log('hello')

        const email = e.target.email.value ;
        const password = e.target.password.value ;
       // console.log(email, password)

        if(password < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
            Swal.fire('Password should be more than 6 charecters and one upper letter and a special cherecter')
            return ;
        }

        // signin
        signIn(email, password)
        .then(result =>{
          const loggedInUser = result.user ;
          console.log(loggedInUser)
          const user = {email}
         e.target.reset() ;

          Swal.fire("Your login successfully done! now you can visit our website")
         navigate(location?.state ? location?.state: '/')
         
         
        })
        .catch(error =>{
          Swal.fire('Please register first')
        })
      }
      
      const handleGoogleSignIn = () =>{
        //console.log('Hello from google')
        signInWithGoogle()
        .then(res =>{
          
            console.log(res) ;
           
        })
        .catch(error =>{
            console.log('error', error)
        })

      }

    return (
        <div>
      
           <Helmet>
          <title>a12-contest | Login</title>
        </Helmet>
       
         <div className="hero">
             
             <div className="hero-content  flex-col lg:flex-row">
             
               <div className="text-center lg:text-left">
                
                
               </div>
               <div className="card flex-shrink-0 w-[600px] max-w-lg shadow-2xl bg-gradient-to-r from-[#cbd5e1] to-[rgb(203 213 225 / 0)] ">
              
               <div className="avatar">
       <div className="w-36 ml-48 mt-4 rounded">
         <img src="https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg?size=626&ext=jpg&uid=R121205384&ga=GA1.1.732846257.1688661449&semt=sph" />
       </div>
     </div>
                 <form onSubmit={handleLogin} className="card-body">
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text  font-bold text-md text-sky-700">Email</span>
                     </label>
                     <input type="email" name='email' placeholder="email" className="input  input-bordered" required />
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text  font-bold text-md text-sky-700">Password</span>
                     </label>
                     <input type={showPassword ? 'text' :'password'} name='password' placeholder="password" className="input input-bordered" required />
                     <span className="absolute mt-[51px] ml-[290px] md:mt-[51px] md:ml-[410px]" onClick={ () => setShowPassword(!showPassword)}>
           {
            showPassword?<AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>  } 
           </span>
                     <label className="label">
                       <a href="#" className="label-text-alt link text-sky-700 font-bold text-lg link-hover">Forgot password?</a>
                     </label>
                   </div>
                   <div className="form-control mt-6">
                     <button  className="btn text-sky-700 bg-white font-bold text-xl">Login</button>
                     <p className='mt-1'>Do not have an account? Please <Link to='/register' className='text-sky-700 underline'>Register</Link></p>
                     
                     
        
            <Link onClick={handleGoogleSignIn}  className="btn mt-3 text-sky-700 bg-white font-bold text-xl">Google</Link>
        
                     
                   </div>
                 </form>
                 {
         loginError && <p className="ml-7 text-red-400 mb-3">{loginError}</p>
         
          }
       {
         loginSuccess && <p className="ml-7 text-green-700 mb-3">{loginSuccess}</p>
       }
               </div>
             </div>
           </div>
       </div>
    );
};

export default Login;