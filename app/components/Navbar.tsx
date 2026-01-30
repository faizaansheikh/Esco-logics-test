"use client";


import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { FaCartShopping } from "react-icons/fa6";
interface NavItem {
    label: string;
    link: string;
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const cart = useSelector((state: RootState) => state.product);
    const count = cart.length;
    const navItems: NavItem[] = [
        { label: "About Us", link: "#" },
        { label: "Contact Us", link: "#" },
        { label: "Products", link: "#" },
        { label: "Customized Solutions", link: "#" },
        { label: "Services", link: "#" },
    ];

    return (
        <header className="w-full bg-red-900 text-white">
            <div className="max-w-7xl mx-auto px-6 h-[90px] flex items-center justify-between list-none">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={280}
                    height={50}
                />
                {navItems.map((item, i) => (
                    <li
                        key={i}
                        className="hidden lg:flex cursor-pointer text-sm hover:text-yellow-400 transition "
                    >
                        {item.label}
                    </li>
                ))}

                <span className="hidden lg:flex items-center gap-5">
                    <span className="text-sm ">1-800-632-6120</span>
                    <span className="bg-[whitesmoke] p-4 rounded-full">
                        <FiSearch size={17} color="black" />
                    </span>
                    <div className="relative inline-block">
                        <FaCartShopping size={24} />
                        {count > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {count}
                            </span>
                        )}
                    </div>
                </span>

                <button
                    className="lg:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {open && (
                <ul className="lg:hidden bg-red-800 px-6 py-4 space-y-4">
                    {navItems.map((item, i) => (
                        <li key={i} className="border-b border-red-700 pb-2 text-white">
                            {item.label}
                        </li>
                    ))}

                    <div className="flex flex-col space-y-4 mt-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-white">1-800-632-6120</span>

                            <div className="flex items-center gap-4">
                                <button className="bg-[whitesmoke] p-3 rounded-full">
                                    <FiSearch size={17} color="black" />
                                </button>
                                <div className="relative">
                                    <FaCartShopping size={24} color="white" />
                                    {count > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                            {count}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            )}

        </header>
    );
}
