import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/Provider";


const Contact = () => {
    const {theme}=useContext(AuthContext);
    return (
        
        <div className={`${theme=="lightTheme"? "dark_theme": "light_theme"} mt-14 py-10 space-y-7`}>
            <div className="text-center space-y-3">
                <h2 className="text-4xl font-semibold">Have A question?</h2>
                <p className="text-gray-500 text-sm">Feel free to reach out to us with any inquiries you may have; we're here to assist you around the clock!</p>
            </div>
            <div className="mx-auto  flex justify-center ">
                <form className="bg-gray-300 px-6 py-10 w-[400px] md:w-[650px] space-y-3 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">

                        <div className="text-base space-y-1">
                            <h2>First Name</h2>
                            <input className="w-full px-1 py-[5px]" type="text" name="" id="" />
                        </div>
                        <div className="text-base space-y-1  w-full" >
                            <h2>Last Name</h2>
                            <input className="px-1 py-[5px] w-full" type="text" name="" id="" />
                        </div>

                    </div>


                    <div className="text-base space-y-1">
                        <h2>Email Address</h2>
                        <input className="w-full px-1 py-[5px]" type="text" name="" id="" />
                    </div>
                    <div className="text-base space-y-1">
                        <h2>Phone</h2>
                        <input className="w-full px-1 py-[5px]" type="text" name="" id="" />
                    </div>

                    <div className="text-base">
                        <h2>Notes</h2>
                        <textarea className="w-full px-1" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="flex justify-center"><button className="btn bg-green-500 border border-green-500 text-white"> Submit</button></div>
                </form>
            </div>

        </div>
    );
};

export default Contact;