import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BrandCategories = () => {
    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        fetch('/brandCategories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    // console.log(categories);




    return (
        <div className="max-w-screen-xl mx-auto mt-12 ">
            <h2 className="text-center text-xl md:text-2xl lg:text-4xl">This is brand categories</h2>
            <br />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">
                
                {
                    categories.map((category, idx)=>
                    
                     <div key={idx} className=" relative lg:h-[250px] w-full rounded-xl hover:opacity-40">
                        {/* <div className=" bg-opacity-50 absolute top-0 right-0 left-0 bottom-0"></div> */}
                        <NavLink to={`/category/${category.brand_name}`}>

                        <img className="h-full w-full rounded-xl" src={category.brand_image} alt="" />
                        </NavLink>
                    </div> 
                   
                    )
                }
                
            </div>
            
        </div>
    );
};

export default BrandCategories;