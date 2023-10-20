import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Provider";
import './Header.css';

const Header = ({ handleTheme }) => {
    const {user, loggingOut}=useContext(AuthContext);

    const navLinks = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>



    </>

    const handleLogOut=()=>{
        loggingOut()
        .then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.log(error)
        })
    }


    const handleGoogleLogin=()=>{

    }


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-7">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end dropDown_zIndex">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user ? <img src={user?.photoURL ? user.photoURL : "https://i.ibb.co/4t3SVXP/man-avatar-profile-picture-vector-illustration-268834-538.jpg"} />
                                :
                                <img src="https://i.ibb.co/4t3SVXP/man-avatar-profile-picture-vector-illustration-268834-538.jpg" />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-4 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                        {
                            user ?
                                <div className="space-y-6">
                                    <p className="text-center text-lg font-semibold">Hi! {user?.displayName}</p>
                                    <p className="text-center text-sm font-thin">{user?.email}</p>

                                    <hr />
                                    <div className="text-center">
                                        <button onClick={handleLogOut} className="btn btn-neutral">Log Out</button>
                                    </div>
                                </div>
                                :
                                <div className="space-y-6">
                                    <Link to="/login"><li className="text-xl hover:bg-gray-500 hover:text-white hover:p-3 hover:rounded">Login</li></Link>
                                    <br />
                                    <Link to="/register"> <li className="text-xl hover:bg-gray-500 hover:text-white hover:p-3 hover:rounded">Register</li></Link>
                                    <hr />
                                    <div className=" text-center">
                                        <button onClick={handleGoogleLogin} className="bg-yellow-200 px-3 py-2  rounded-xl">Log In with Google</button>
                                    </div>
                                </div>

                        }


                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;