import { useContext, useEffect, useState } from "react";
import Banner from "./Components/Banner";
import BrandCategories from "./Components/BrandCategories";
import './Home.css';
import OurServices from "./Components/OurServices";
import Contact from "./Components/Contact";
import { AuthContext } from "../../AuthProvider/Provider";


const Home = () => {
    const {theme}=useContext(AuthContext);
    // const [theme,setTheme]=useState("lightTheme");

    // const handleTheme=()=>{
    //     if(theme=="lightTheme"){
    //         setTheme("darkTheme")
    //     }
    //     else{

    //         setTheme("lightTheme");
    //     }
    // }

    
    // className={theme=="lightTheme"? "dark_theme": "light_theme"}
    return (
        <div className={theme=="lightTheme"? "dark_theme": "light_theme"}>
             
            {/* <button onClick={handleTheme}>toggle</button> */}
            <Banner></Banner>
            <BrandCategories></BrandCategories>

            <OurServices></OurServices>
            <Contact></Contact>
        </div>
    );
};

export default Home;