import { Icon } from "@iconify-icon/react";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex justify-between w-full p-3">
            {/* Bag */}
            <div className="flex w-1/3 justify-center items-center">
                <Icon icon="noto:shopping-bags" width={60} />
                {/* Bag Text */}
                <div>
                    <div>SHOES</div>
                    <div>STORE</div>
                </div>
                {/* Bag Text End */}
            </div>
            {/* Bag End */}

            {/* Input Box */}
            <div className="flex w-1/3 justify-start items-center">
                <input
                    type="text"
                    placeholder="search"
                    className="w-full h-full p-1 pl-2 border border-gray-300 rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                />
                <div className="bg-black text-white font-bold px-4 rounded py-4 flex justify-center items-center cursor-pointer ">Search</div>
            </div>
            {/* Input Box End */}

            {/* Register and Log in */}
            <div className="hidden md:flex font-semibold text-lg w-1/3 justify-center items-center space-x-4">
                <div className="cursor-pointer">Register</div>
                <div>Log in</div>
                <div className="relative flex items-center">
                    <Icon icon="bi:cart" width={30} />
                    <span className="absolute top-2 right-2 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-1">
                        3
                    </span>
                </div>
            </div>
            {/* Register and Log in End */}

            {/* Hamburger Menu Icon for Small Screens */}
            <div className="md:hidden w-1/3 p-3 flex items-center">
                <Icon icon="ic:baseline-menu" width={30} onClick={toggleMenu} />
            </div>
            {/* Hamburger Menu End */}

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-24 right-2 bg-white shadow-md w-48 flex flex-col text-black font-semibold md:hidden">
                    <div className="py-2 px-4 hover:bg-gray-200">Register</div>
                    <div className="py-2 px-4 hover:bg-gray-200">Log in</div>
                    <div className="py-2 px-4 hover:bg-gray-200 flex justify-between items-center">
                        Cart
                        <div className="relative">
                            <Icon icon="bi:cart" width={20} />
                            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-1">
                                3
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
