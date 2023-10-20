import { useLoaderData } from "react-router-dom";

const UpdatePage = () => {

    const loadedData=useLoaderData();
    console.log(loadedData)
    return (
        <div>
            <h2>Update</h2>
        </div>
    );
};

export default UpdatePage;