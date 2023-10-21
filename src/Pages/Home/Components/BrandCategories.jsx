import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const BrandCategories = () => {
    const [categories, setCategories] = useState([]);
   
    useEffect(() => {
        fetch('/brandCategories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // console.log(categories);




    return (
        <div className="max-w-screen-xl mx-auto mt-12 ">
            <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold text-orange-500">Browse by Brand Categories</h2>
            <br />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">

                {
                    categories.map((category, idx) =>

                        <div key={idx} className="hover:opacity-50 relative h-[200px] md:h-[250px] w-full rounded-xl ">
                            <NavLink to={`/category/${category.brand_name}`}>
                                <div className=" bg-black bg-opacity-50 absolute top-0 right-0 left-0 bottom-0 rounded-xl">

                                </div>




                                <img className="h-full w-full rounded-xl" src={category.brand_image} alt="" />
                                <div className="flex items-center justify-center inset-0 absolute text-white text-4xl font-bold">
                                    <h2 className="">{category.brand_name}</h2>
                                </div>
                            </NavLink>
                        </div>

                    )
                }

            </div>

        </div>
    );
};

export default BrandCategories;