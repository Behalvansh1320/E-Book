import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";

import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
    { name: "Dashboard", href: "/user-dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);

    const { currentUser, logout } = useAuth();

    const handleLogOut = () => {
        logout();
        setIsDropdownOpen(false);
    };

    const token = localStorage.getItem("token");

    return (
        <header className="bg-[#1A1A1A] text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-screen-2xl mx-auto px-4 py-4">
                <nav className="flex justify-between items-center">
                    {/* Left Side */}
                    <div className="flex items-center gap-4 md:gap-8">
                        <Link to="/">
                            <HiMiniBars3CenterLeft className="size-6 text-white hover:text-yellow-400 transition" />
                        </Link>

                        <div className="relative sm:w-72 w-44">
                            <IoSearchOutline className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-300" />
                            <input
                                type="text"
                                placeholder="Search books..."
                                className="bg-[#333] text-white placeholder-gray-400 w-full py-2 pl-10 pr-4 rounded-md focus:outline-yellow-400 transition"
                            />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative flex items-center space-x-3">
                        <div className="relative">
                            {currentUser ? (
                                <>
                                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="focus:outline-none">
                                        <img
                                            src={avatarImg}
                                            alt="User Avatar"
                                            className={`w-8 h-8 rounded-full border-2 ${currentUser ? "border-yellow-400" : "border-transparent"
                                                }`}
                                        />
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="absolute right-0 mt-3 w-52 bg-[#2A2A2A] text-white shadow-xl rounded-lg overflow-hidden z-50">
                                            <ul className="py-2 text-sm">
                                                {navigation.map((item) => (
                                                    <li key={item.name}>
                                                        <Link
                                                            to={item.href}
                                                            onClick={() => setIsDropdownOpen(false)}
                                                            className="block px-4 py-2 hover:bg-[#3B3B3B] transition"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li>
                                                    <button
                                                        onClick={handleLogOut}
                                                        className="block w-full text-left px-4 py-2 hover:bg-[#3B3B3B] transition"
                                                    >
                                                        Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </>
                            ) : token ? (
                                <Link to="/dashboard" className="text-yellow-400 font-semibold hover:underline">
                                    Dashboard
                                </Link>
                            ) : (
                                <Link to="/login">
                                    <HiOutlineUser className="size-6 text-white hover:text-yellow-400 transition" />
                                </Link>
                            )}

                        </div>

                        <Link to="/wishlist" className="hidden sm:block">
                            <HiOutlineHeart className="size-6 text-white hover:text-yellow-400 transition" />
                        </Link>

                        <Link
                            to="/cart"
                            className="bg-yellow-400 text-black px-3 py-1 flex items-center gap-1 rounded-md hover:bg-yellow-300 transition"
                        >
                            <HiOutlineShoppingCart className="text-lg" />
                            <span className="text-sm font-semibold">{cartItems.length}</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
