import { useLoaderData } from "react-router-dom";

const Cart = () => {
    const cartDatas = useLoaderData();
    console.log(cartDatas)
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

                                <button className="btn btn-error">Remove</button>



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