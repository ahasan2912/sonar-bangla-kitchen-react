
const Banner = () => {
    return (
        <div className="max-w-7xl flex mx-auto items-center justify-between md:py-8 px-5">
            <div className="bg-[linear-gradient(0deg,rgba(21,11,43,0.9),rgba(21,11,43,0)_100%),url('/src/assets/image/cover_phot.jpg')] bg-cover bg-center h-[600px] rounded-xl">
                <div className="flex flex-col items-center justify-center h-full lg:h-full lg:w-1/2 mx-auto text-center gap-5 px-1">
                    <h1 className="text-4xl text-white font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="text-gray-300">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className="space-x-3">
                        <button className="btn btn-success">Explore Now</button>
                        <button className="btn">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;