import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Provider";
import Swal from "sweetalert2";

const Cart = () => {
    const {user}=useContext(AuthContext);
    const loadedData = useLoaderData();
    console.log(loadedData)
    const [cartDatas, setCartDatas] = useState([]);

    const userEmail=user?.email;


 

    useEffect(() => {
        fetch(`https://brand-shop-server-ochre.vercel.app/product/cart/${userEmail}`)
            .then(res => res.json())
            .then(data => setCartDatas(data))
    }, [])

    const handleDeleteCart = (id) => {
        console.log(id)
        fetch(`https://brand-shop-server-ochre.vercel.app/product/cart/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Product Removed From Cart Successfully',
                        
                      })

                    const remainingProduct = cartDatas.filter(cData => cData._id !== id);
                    console.log(remainingProduct)
                    setCartDatas(remainingProduct);
                }



            })




    }


    return (
        <div className="max-w-screen-xl mx-auto flex flex-col gap-4">
            <div className="text-center text-4xl mt-5 mb-5 font-semibold text-orange-600">
                Your Selected Items
            </div>
            {
                cartDatas.map(cartData =>
                    <div key={cartData._id} className="mb-4 px-4">
                        <div className=" md:flex gap-5 items-center">

                            <div className="md:h-[200px] md:w-[250px]">
                                <img className="h-full w-full" src={cartData.image} alt="" />
                            </div>

                            <div className="space-y-3">

                                <h2 className="text-3xl font-semibold">{cartData.productName}</h2>
                                <h2 className="text-lg">{cartData.brandName}</h2>
                                <h2 className="text-sm text-gray-500">{cartData.productType}</h2>

                                <button onClick={() => handleDeleteCart(cartData._id)} className="btn bg-orange-600 text-white">Remove</button>



                            </div>
                            <div className="md:flex-grow"></div>
                            <div className="md:mr-36">
                                <p className=""><span className="text-xl font-bold ">Price:</span> <span className="text-lg text-orange-700 font-bold">${cartData.price}</span> </p>
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