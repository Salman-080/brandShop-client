import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
    const loadedData = useLoaderData();
    console.log(loadedData)
    const [cartDatas,setCartDatas]=useState([]);
    

    useEffect(()=>{
        setCartDatas(loadedData);
    },[])
    console.log(cartDatas)

    const handleDeleteCart=(id)=>{
console.log(id)
        fetch(`http://localhost:5000/product/cart/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);

            const remainingProduct= cartDatas.filter(cData=> cData._id!==id);
            console.log(remainingProduct)
            setCartDatas(remainingProduct);

        })


        

    }


    return (
        <div className="max-w-screen-xl mx-auto flex flex-col gap-4">
            {
                cartDatas.map(cartData =>
                    <div key={cartData._id}>
                        <div  className=" md:flex gap-5 items-center">

                            <div className="md:h-[200px] md:w-[250px]">
                                <img className="h-full w-full" src={cartData.image} alt="" />
                            </div>

                            <div className="space-y-3">

                                <h2 className="text-3xl font-semibold">{cartData.productName}</h2>
                                <h2 className="text-lg">{cartData.brandName}</h2>
                                <h2 className="text-sm text-gray-500">{cartData.productType}</h2>

                                <button onClick={()=>handleDeleteCart(cartData._id)} className="btn btn-error">Remove</button>



                            </div>
                            <div className="md:flex-grow"></div>
                            <div className="md:mr-36">
                                <p className=""><span className="text-xl font-bold">Price:</span> <span className="text-lg ">{cartData.price}$</span> </p>
                            </div>



                        </div>
                        <div className="border border-gray-300 mt-3"></div>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;