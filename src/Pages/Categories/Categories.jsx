import { Link, NavLink, useLoaderData } from "react-router-dom";

const Categories = () => {
    const categoryDatas=useLoaderData();
    // console.log(categoryDatas)
    
    
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
                categoryDatas.map(categoryData=> <div key={categoryData._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={categoryData.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{categoryData.productName}</h2>
                  <p>{categoryData.price}</p>
                  <div className="card-actions justify-end">
                    <NavLink><button to={`/cateogory/${categoryData._id}`} className="btn btn-primary">View Details</button></NavLink>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default Categories;