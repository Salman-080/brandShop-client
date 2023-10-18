import { Outlet } from "react-router-dom";
import Header from "../FixedComponents/Header/Header";
import Footer from "../FixedComponents/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;