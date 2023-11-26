
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {user,loading} = useContext(AuthContext) ;

    if(loading) {
        return <span className="loading loading-spinner ml-44 md:ml-64 lg:ml-80 loading-lg"></span>
    }

    if(user){
        return children ;
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
       
};

export default PrivateRoute;