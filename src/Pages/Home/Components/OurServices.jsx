import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/Provider";


const OurServices = () => {
    const {theme}=useContext(AuthContext);
    return (
        <div className={`${theme=="lightTheme"? "dark_theme": "light_theme "} px-12 mt-12  py-12`}>
            <div className="text-center space-y-5">
                <h2 className="text-2xl md:text-4xl font-semibold text-orange-500">Our Services</h2>
                <p className=" text-orange-300 font-medium">All of our services are currently accessible to you!</p>
            </div>

            <div className="flex flex-col md:flex-row text-center mt-9 gap-8">
                <div className="space-y-2">
                    <div className="w-[100px] h-[100px] mx-auto mb-3 bg-slate-200 rounded-full p-6"><img src="/beverage.png" alt="" /></div>
                    <h2 className="text-xl font-medium">Beverage Items</h2>
                    <p>Experience the ease of having your preferred beverage items expertly provided during your event.
                    </p>
                </div>
                <div className="space-y-2">
                    <div className="w-[100px] h-[100px] mx-auto mb-3 bg-slate-200 rounded-full p-6"><img src="/hotDishes.png" alt="" /></div>
                    <h2 className="text-xl font-medium">Hot Dishes</h2>
                    <p>
                        Hot Dishes presents an extensive selection of freshly prepared, delectable buffet catering options suitable for gatherings of all scales.
                    </p>
                </div>
                <div className="space-y-2">
                   <div className="w-[100px] h-[100px]  mx-auto mb-3 bg-slate-200 rounded-full p-6">  <img src="/dessert.png" alt="" /></div>
                    <h2 className="text-xl font-medium">Dessert</h2>
                    <p>
                    Our dessert selection boasts a variety of delectable delights that can add a touch of sweetness to any occasion.
                    </p>
                </div>
                <div className="space-y-2">
                    <div className="w-[100px] h-[100px]  mx-auto mb-3 bg-slate-200 rounded-full p-6"><img src="/coldDishes.png" alt="" /></div>
                    <h2 className="text-xl font-medium">Cold Dishes</h2>
                    <p>
                    Our catering buffet presents an assortment of chilled dishes, perfect for pleasing a wide range of tastes and appetites.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default OurServices;