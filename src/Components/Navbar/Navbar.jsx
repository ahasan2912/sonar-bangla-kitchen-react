
const Navbar = () => {
    return (
        <div className="max-w-7xl flex mx-auto items-center justify-between py-8 px-5">
            <h1 className="text-3xl sm:text-4xl font-bold">Recipe Calories</h1>
            <ul className="hidden lg:flex items-center space-x-6 font-semibold">
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
                <li>Search</li>
            </ul>
            <div className="bg-gray-300 px-3 py-2 rounded-3xl flex items-center space-x-2">
                <i className="fa-solid fa-magnifying-glass text-lg"></i>
                <input className="bg-transparent text-lg w-full outline-none" type="text" placeholder="Search"/>
            </div>
            <div className="hidden lg:flex bg-green-500 w-10 h-10 items-center justify-center rounded-full">
                <i className="fa-solid fa-user text-xl"></i>
            </div>
        </div>
    );
};

export default Navbar;