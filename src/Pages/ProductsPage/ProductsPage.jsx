import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import { FaStar } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';


const ProductsPage = () => {
    const productData = useLoaderData();
    console.log(productData)
    const array=[0,1,2,3,4];

    const handleAddToCart=()=>{
        fetch("http://localhost:5000/product/cart",{
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(productData)
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
        <div className="max-w-screen-xl mx-auto mt-7">
            <div className="card lg:card-side bg-base-100 shadow-xl space-x-4 ">
            <figure className="border border-green-500 lg:w-[550px]"><img className="border border-yellow-700 w-full h-full" src={productData.image} alt="" /></figure>
            <div className="border border-black lg:w-[750px] space-y-3">
                <h2 className="card-title">{productData.productName}</h2>
                <p><span className="text-lg font-semibold">Brand: </span> <span>{productData.brandName}</span></p>
                <p><span className="text-lg font-semibold">Type: </span> <span>{productData.productType}</span></p>
                <p><span className="text-lg font-semibold">Description: </span> <span>{productData.shortDescription}</span></p>


                <p><span className="text-lg font-semibold">Rating: </span> <span>
                    
                    {
                        array.map((a,idx)=> a+1 <= productData.rating ? <div key={idx}> <FaStar></FaStar></div>  :  <div key={idx+1}><AiOutlineStar></AiOutlineStar></div> )
                    }
                    </span></p>



                <p><span className="text-lg font-semibold">Price: </span> <span>{productData.rating}</span></p>
               

                <div className="card-actions mt-3">
                    <button onClick={handleAddToCart} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>

           
        </div>
        </div>
        
    );
};

export default ProductsPage;