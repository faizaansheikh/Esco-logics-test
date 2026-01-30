"use client";


import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

interface NavItem {
    label: string;
    link: string;
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const cart = useSelector((state: RootState) => state.product);
    console.log(cart);
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

                {/* Logo */}
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={280}
                    height={50}
                />

                {/* Desktop Menu */}
                {/* <ul className="hidden lg:flex gap-6 text-sm font-medium"> */}
                {navItems.map((item, i) => (
                    <li
                        key={i}
                        className="hidden lg:flex cursor-pointer text-sm hover:text-yellow-400 transition "
                    >
                        {item.label}
                    </li>
                ))}
                {/* </ul> */}

                {/* Right */}
                <span className="hidden lg:flex items-center gap-5">
                    <span className="text-sm ">1-800-632-6120</span>
                    <span className="bg-[whitesmoke] p-4 rounded-full">
                        <FiSearch size={17} color="black" />
                    </span>
                </span>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="lg:hidden bg-red-800 px-6 py-4 space-y-4">
                    {navItems.map((item, i) => (
                        <li key={i} className="border-b border-red-700 pb-2">
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}
