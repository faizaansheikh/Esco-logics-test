import Image from "next/image";
import XButton from "./XButton";

export default function Hero() {
    return (
        <section className="w-full bg-[#f7f7f7]">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-xs font-semibold text-orange-500 mb-2">
                        PRODUCTS / PARTITION AND CAGES
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Partitions And <span className="text-red-900">Cages</span>
                    </h1>

                    <p className="text-gray-700 leading-relaxed mb-6"> 
                        Industrial partitions and cages are physical barriers in industrial and commercial settings to create distinct, secure areas within a larger space. They are typically constructed from sturdy materials like wire mesh and steel, providing both security and organization. <br /> <br />
                        Industrial partitions and cages are durable structural solutions designed to divide, secure, and organize large industrial or commercial spaces. Built with heavy-gauge wire mesh, reinforced steel panels, and strong framing, they offer long-term reliability in demanding environments. These systems integrate seamlessly into existing facility layouts and can be expanded, relocated, or reconfigured as operational needs evolve. With multiple door options, locking systems, and customizable layouts, they provide flexible, secure, and efficient workspace management.
                    </p>

                    <XButton label="View Products"/>
                    
                </div>
                <div className="relative ml-3 md:ml-6 w-full h-[300px] md:h-[400px]">
                    <Image
                        src="/hero2.png" 
                        alt="Partitions and Cages"
                        fill
                        className="object-contain"
                        // priority
                    />
                </div>

            </div>
        </section>
    );
}
