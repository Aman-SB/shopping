import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-full bg-[#111] pt-4 px-6">
            <div className="w-6xl h-12 flex text-xl justify-between text-white mx-10">
                <NavLink to="/">Shopping-Cart</NavLink>

                <div className="flex gap-8">
                    <NavLink to="/">Home</NavLink>

                    <NavLink to="/cart">Cart</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
