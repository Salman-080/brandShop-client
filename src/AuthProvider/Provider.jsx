import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext=createContext(null);
const Provider = ({children}) => {
    
    const auth= getAuth(app);
    const [user, setUser]=useState(null);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
          });

        return ()=>{
            unsubscribe();
        }

        
    },[])

    const profileUpdate=(name, picture)=>{

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: picture
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });

    }
    const loggingOut=()=>{
        return signOut(auth);
    }
    console.log(user)
    const authInfo={
        user,
        createUser,
        signIn,
        profileUpdate,
        loggingOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;