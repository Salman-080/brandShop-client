import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import './Swiper.css'
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Categories = () => {
    const categoryDatas = useLoaderData();
    console.log(categoryDatas)
    const [sliderImage, setSliderImage] = useState([]);
    const array=[0,1,2,3,4];
    useEffect(() => {
        fetch("/sliderImage.json")
            .then(res => res.json())
            .then(data => setSliderImage(data))
    }, [])
console.log(sliderImage)

    return (


        <div className="max-w-screen-xl mx-auto">
            <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  navigation
                  pagination={{ clickable: true }}
                  //scrollbar={{ draggable: true }}
                  
                  onSwiper={(swiper) => console.log(swiper)}
            >
          
           

            <div>
                {
                    sliderImage.map(image => <SwiperSlide key={image.id}>
                        <div className="w-full h-[500px]">
                        <img className="w-full h-full" src={image.advertisement_image} alt="" />
                        </div>
                        
                    </SwiperSlide> )
                    
                }
            </div>
            </Swiper>
           
                <div className="mt-12 mb-9">
                    <h2 className="text-xl md:text-4xl text-center font-bold text-orange-400">Explore Foods</h2>
                </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-12">

                {
                    categoryDatas.length !== 0 ? (
                        categoryDatas.map(categoryData => <div key={categoryData._id} className="card card-compact  bg-base-100 shadow-xl ">
                            <figure className="h-[250px]"><img className="h-full w-full" src={categoryData.image} alt="Shoes" /></figure>
                            <div className="px-4 mt-2 space-y-2">
                                <div className="flex  justify-between items-center ">
                                    <h2 className=" text-2xl font-semibold text-orange-600">{categoryData.productName}</h2>
                                    <p className="text-gray-500 ">{categoryData.brandName}</p>
                                </div>
                                <p>{categoryData.productType}</p>
                                <p className="flex items-center gap-2"><span className="text-lg font-semibold">Rating: </span> <span className="flex">
                    
                    {
                        array.map((a,idx)=> a+1 <= categoryData.rating ? <div key={idx}> <FaStar className="text-yellow-400"></FaStar></div>  :  <div key={idx+1}><AiOutlineStar ></AiOutlineStar></div> )
                    }
                    </span></p>

                                <p><span className=" text-xl font-medium">Price: </span><span className=" text-orange-500 text-lg font-semibold">${categoryData.price}</span></p>

                            </div>
                            <div className="flex flex-col gap-6 mb-2 mt-6 px-4">
                                <Link to={`/product/${categoryData._id}`}><button className="btn bg-orange-700 text-white w-full">View Details</button></Link>

                                <Link to={`/update/${categoryData._id}`}><button className="btn bg-orange-600 text-white w-full">Update</button></Link>
                            </div>

                        </div>)
                    ) :
                            <h2 className="col-span-3 mt-4  text-center text-3xl font-semibold text-red-700">Sorry No Products <br /> Available!</h2>
                       
                }

            </div>
        </div>

    );
};

export default Categories;