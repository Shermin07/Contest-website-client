/* eslint-disable no-unreachable */
import {  createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const auth = getAuth(app);
 export const AuthContext = createContext(null) ;
 const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    //signup
    const createUser = (email, password,photoURL,name) =>{
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Update the user profile 
            updateProfile(userCredential.user, { displayName: name, photoURL });
            setLoading(false);
          });
        setLoading(true);

     }

       //onAuthStateChange
       useEffect(() =>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
              console.log('User in the auth state changed', currentUser),
              setUser(currentUser);
              setLoading(false);
          })
          return() =>{
              unsubscribe() ;
          }
       },[])

        // signIn
  const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(true);
 }
 // logout
 const logOut = () =>{
    return signOut(auth)
    setLoading(true);
 }
 // sign in with google
 const signInWithGoogle =() =>{
    setLoading(true)
    return signInWithPopup(auth,provider);
 }

 const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    signInWithGoogle

}
    return (
        <div>
             <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>   
        </div>
    );
};

export default AuthProvider;