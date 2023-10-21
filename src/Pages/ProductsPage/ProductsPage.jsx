import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import { FaStar } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/Provider";


const ProductsPage = () => {
    const {user}=useContext(AuthContext);
    const userEmail=user?.email;
    const productData = useLoaderData();
    console.log(productData);
    const {productName, brandName, productType, price,shortDescription, rating,image}=productData;
    const pData={productName, brandName, productType, price,shortDescription, rating,image};
    const array=[0,1,2,3,4];

    const handleAddToCart=()=>{
        console.log(userEmail)
        fetch(`https://brand-shop-server-ochre.vercel.app/product/cart/${userEmail}`,{
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(pData)
        })
        .then(res=>res.json())
        .then(data=>{
            
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Product added to cart',
                    
                  })
            }

            
        })
    }

    return (
        <div className="max-w-screen-xl mx-auto mt-7 mb-6">
            <div className="card lg:card-side bg-base-100 shadow-xl space-x-4 px-2 py-3">
            <figure className=" lg:w-[550px]"><img className=" w-full h-full" src={productData.image} alt="" /></figure>
            <div className=" lg:w-[750px] space-y-3">
                <h2 className="card-title">{productData.productName}</h2>
                <p><span className="text-lg font-semibold">Brand: </span> <span>{productData.brandName}</span></p>
                <p><span className="text-lg font-semibold">Type: </span> <span>{productData.productType}</span></p>
                <p><span className="text-lg font-semibold">Description: </span> <span>{productData.shortDescription}</span></p>


                <p className="flex items-center gap-2"><span className="text-lg font-semibold">Rating: </span> <span className="flex">
                    
                    {
                        array.map((a,idx)=> a+1 <= productData.rating ? <div key={idx}> <FaStar className="text-yellow-400"></FaStar></div>  :  <div key={idx+1}><AiOutlineStar ></AiOutlineStar></div> )
                    }
                    </span></p>



                <p><span className="text-lg font-semibold">Price: </span> <span>${productData.price}</span></p>
               

                <div className="card-actions mt-3">
                    <button onClick={handleAddToCart} className="btn bg-orange-500 text-white">Add To Cart</button>
                </div>
            </div>

           
        </div>
        </div>
        
    );
};

export default ProductsPage;