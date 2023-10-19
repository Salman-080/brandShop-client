import { useLoaderData } from "react-router-dom";

const ProductsPage = () => {
    const productData=useLoaderData();

    return (
        <div>
          <h1>{productData._id}</h1>
          <h1>{productData.productName}</h1>
        </div>
    );
};

export default ProductsPage;