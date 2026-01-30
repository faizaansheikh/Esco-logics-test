import Image from "next/image";
import { FaAnglesRight } from "react-icons/fa6";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaPaperPlane,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";
import XButton from "./XButton";

const Footer = () => {
    return (
        <footer className="bg-[#2f2d42] text-gray-300">

            <div className="max-w-7xl mx-auto px-6 md:px-14 mt-12">
                <div className="bg-[#f5a623] rounded-b-xl px-6 md:px-18 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <h3 className="text-white text-lg font-semibold">
                        Subscribe To Our <br className="hidden md:block" /> News Letter
                    </h3>

                    <div className="flex w-full md:w-1/2 bg-white rounded-full overflow-hidden">
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            className="flex-1 px-5 py-3 outline-none text-gray-700"
                        />
                        <button className="bg-[#f5a623] rounded-full p-4 m-1 flex items-center justify-center text-white">
                            <FaPaperPlane />
                        </button>
                    </div>

                    <div className="flex gap-3 text-white">
                        <span className="p-2 bg-white rounded-full">
                            <FaFacebookF color="#f5a623"/>
                        </span>
                        <span className="p-2 bg-white rounded-full">
                            <FaTwitter color="#f5a623"/>
                        </span>
                        <span className="p-2 bg-white rounded-full">
                            <FaLinkedinIn color="#f5a623"/>
                        </span>
                        <span className="p-2 bg-white rounded-full">
                            <FaYoutube color="#f5a623"/>
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-14 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

                <div>
                    <div className="mb-6">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={320}
                            height={80 }
                        />
                    </div>
                    <p className="text-sm mb-8">
                        Subscribe to our Newsletter for Spotlight Products and Specials.
                    </p>
                   <XButton label=" Contact Us"/>

                    <div className="flex items-center gap-4 mt-6 text-sm">
                        ___Follow on
                        <FaFacebookF />
                        <FaTwitter />
                        <FaLinkedinIn />
                        <FaYoutube />
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4 md:mt-12">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2"><FaAnglesRight/> About Us</li>
                        <li className="flex items-center gap-2"><FaAnglesRight/> Products</li>
                        <li className="flex items-center gap-2"><FaAnglesRight/> Customized Solutions</li>
                        <li className="flex items-center gap-2"><FaAnglesRight/> Services</li>
                        <li className="flex items-center gap-2"><FaAnglesRight/> Contact Us</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4 md:mt-12">Our services</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2"><FaAnglesRight/> Container Modifier</li>
                        <li className="flex items-center gap-2"><FaAnglesRight/> Container Repair & Maintenance</li>
                        <li className="flex items-center gap-2"><FaAnglesRight/> Dunnage Installation & Kitting</li>
                        <li className="flex items-center gap-2"><FaAnglesRight/> Dunnage Washing</li>
                        <li className="flex items-center gap-2"><FaAnglesRight/> Pallet Rack Repair</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4 md:mt-12">Contact Us</h4>
                    <div className="flex items-center gap-3 text-sm mb-3">
                        <FaPhoneAlt color="#f5a623" />
                        <span>(855) 905-0875</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <FaEnvelope color="#f5a623" />
                        <span>Sales@cechms.com</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 py-8 text-sm">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-2">
                    <p>© All Copyright 2026 by cechms.co</p>
                    <p>Designed And Developed by Esco Logics</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
