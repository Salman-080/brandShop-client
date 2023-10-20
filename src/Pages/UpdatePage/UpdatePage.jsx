import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';


const UpdatePage = () => {

    const loadedData = useLoaderData();
    console.log(loadedData)
    const [brands,setBrands]=useState([]);

    useEffect(()=>{
        fetch('/brandCategories.json')
        .then(res=>res.json())
        .then(data=>setBrands(data))
    },[])

    const handleUpdateProduct=e=>{
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

        fetch(`http://localhost:5000/update/${loadedData._id}`,{
            method:"PUT",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)

            if(data.modifiedCount>0){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Product Updated Successfully',
                    
                  })
            }

        })
    }
    return (
        <div className="max-w-screen-xl mx-auto mt-12">
            <form onSubmit={handleUpdateProduct} className="bg-gray-400 p-16 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="productName" defaultValue={loadedData.productName} id="" />
                    <select name="brandName" className="select select-bordered w-full max-w-xs">
                        <option selected>{loadedData.brandName}</option>
                        {
                            brands.map((brand, idx) => <option key={idx}>{brand.brand_name}</option>)
                        }

                    </select>
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="productType" defaultValue={loadedData.productType} id="" />
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="price" defaultValue={loadedData.price} id="" />
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="shortDescription" defaultValue={loadedData.shortDescription} id="" />
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="rating" defaultValue={loadedData.rating} id="" />
                    <input className="input input-bordered input-md w-full max-w-xs" type="text" name="image" defaultValue={loadedData.image} id="" />


                </div>
                <br />
                <br />
                <div className="text-center">
                    <button className="btn btn-ghost">Submit</button>
                </div>


            </form>

        </div>
    );
};

export default UpdatePage;