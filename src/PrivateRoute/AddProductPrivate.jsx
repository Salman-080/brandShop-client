import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Provider";
import { Navigate } from "react-router-dom";

const AddProductPrivate = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    if(loading){
        return <div>Loading</div>
    }


    if(!user){
        return <Navigate to="/login"></Navigate>
    }
    else{
        return children
    }
};

export default AddProductPrivate;