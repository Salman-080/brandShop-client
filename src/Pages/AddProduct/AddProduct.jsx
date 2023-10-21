import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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

        fetch('https://brand-shop-server-ochre.vercel.app/products',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Added Successfully',
                    
                  })
            }

        })
    }
    return (
        <div className="max-w-screen-xl mx-auto mt-12">
            <form onSubmit={handleAddProduct} className="bg-orange-400 p-16 rounded-xl mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="productName" placeholder="Product Name" id="" />
                    <select name="brandName" className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Brand Name</option>
                        {
                            brands.map((brand,idx)=> <option key={idx}>{brand.brand_name}</option> )
                        }
                       
                    </select>
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="productType" placeholder="Type" id="" />
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="price" placeholder="Price" id="" />
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="shortDescription" placeholder="Short Description" id="" />
                    <input className="input input-bordered input-md w-full max-w-xs" type="number" name="rating" placeholder="Rating (Integer Number)" id="" />
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="image" placeholder="Image Url" id="" />


                </div>
                <br />
                <br />
                <div className="text-center">
                <button className="btn bg-orange-700 text-white border-orange-700">Add Product</button>
                </div>
                

            </form>

        </div>
    );
};

export default AddProduct;