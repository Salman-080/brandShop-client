
const Banner = () => {
    return (
        <div className="bg-no-repeat bg-cover relative h-[200px] md:h-[300px] lg:h-[600px] grid items-center justify-center" style={{backgroundImage: "url(/banner.png)"}}>
            <div className="bg-black bg-opacity-60 absolute top-0 right-0 left-0 bottom-0"></div>
          
            <h2 className="text-center text-2xl md:text-xl lg:text-5xl text-white relative z-0 lg:font-extrabold">Savoring World Flavors! <br /> <br /> Iconic Food Brands Unveiled</h2>
            
        </div>
    );
};

export default Banner;