import { useEffect, useState } from "react";
import Banner from "./Components/Banner";
import BrandCategories from "./Components/BrandCategories";
import './Home.css';

const Home = () => {
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
        <div >
            {/* <button onClick={handleTheme}>toggle</button> */}
            <Banner></Banner>
            <BrandCategories></BrandCategories>
        </div>
    );
};

export default Home;