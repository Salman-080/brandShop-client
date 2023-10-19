import { useEffect, useState } from "react";

const AddProduct = () => {
    const [brands,setBrands]=useState([]);

    useEffect(()=>{
        fetch('/brandCategories.json')
        .then(res=>res.json())
        .then(data=>setBrands(data))
    },[])
    const handleAddProduct = e => {
        e.preventDefault();
        const productName = e.target.productName.value;
        const brandName = e.target.brandName.value;
        const productType  = e.target.productType.value;
        const price = e.target.price.value;
        const shortDescription = e.target.shortDescription.value;
        const rating = e.target.rating.value;
        const image = e.target.image.value;
        
        
        console.log(productName,image, brandName,productType,price,shortDescription,rating)
        const product={
            productName, brandName,productType,price,shortDescription,rating,image
        }

        fetch('http://localhost:5000/products',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div className="max-w-screen-xl mx-auto mt-12">
            <form onSubmit={handleAddProduct} className="bg-gray-400 p-16 rounded-xl">
                <div className="grid grid-cols-3 gap-7 ">
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="productName" id="" />
                    <select name="brandName" className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Brand Name</option>
                        {
                            brands.map((brand,idx)=> <option key={idx}>{brand.brand_name}</option> )
                        }
                       
                    </select>
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="productType" id="" />
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="price" id="" />
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="shortDescription" id="" />
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="rating" id="" />
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="image" id="" />


                </div>
                <br />
                <br />
                <div className="text-center">
                <button className="btn btn-ghost">Add</button>
                </div>
                

            </form>

        </div>
    );
};

export default AddProduct;