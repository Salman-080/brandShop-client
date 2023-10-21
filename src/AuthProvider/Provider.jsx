import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext=createContext(null);
const Provider = ({children}) => {
    
    const auth= getAuth(app);
    const [user, setUser]=useState(null);
    const [theme,setTheme]=useState("darkTheme");
    const [loading,setLoaing]=useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser=(email,password)=>{
        setLoaing(false);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email,password)=>{
        setLoaing(false);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn=()=>{
        setLoaing(false);
       return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoaing(false);
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
        setLoaing(false);
        return signOut(auth);
    }


    const handleTheme=()=>{
        if(theme=="lightTheme"){
            setTheme("darkTheme")
        }
        else{

            setTheme("lightTheme");
        }
    }
    console.log(user)
    const authInfo={
        user,
        createUser,
        signIn,
        profileUpdate,
        loggingOut,
        handleTheme,
        theme,
        googleSignIn,
        loading,
    }





    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;