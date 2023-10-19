import { useLoaderData } from "react-router-dom";

const ProductsPage = () => {
    const productData = useLoaderData();

    return (
        <div className="max-w-screen-xl mx-auto mt-7">
            <div className="card lg:card-side bg-base-100 shadow-xl space-x-4 ">
            <figure className="border border-green-500 lg:w-[550px]"><img className="border border-yellow-700 w-full h-full" src={productData.image} alt="" /></figure>
            <div className="border border-black lg:w-[750px] space-y-3">
                <h2 className="card-title">{productData.productName}</h2>
                <p><span className="text-lg font-semibold">Brand: </span> <span>{productData.brandName}</span></p>
                <p><span className="text-lg font-semibold">Type: </span> <span>{productData.productType}</span></p>
                <p><span className="text-lg font-semibold">Description: </span> <span>{productData.shortDescription}</span></p>
                <p><span className="text-lg font-semibold">Rating: </span> <span>{productData.rating}</span></p>
                <p><span className="text-lg font-semibold">Price: </span> <span>{productData.rating}</span></p>
               

                <div className="card-actions mt-3">
                    <button className="btn btn-primary">Add To Cart</button>
                </div>
            </div>

           
        </div>
        </div>
        
    );
};

export default ProductsPage;