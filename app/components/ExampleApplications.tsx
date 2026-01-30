"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function ExampleApplications() {
    const items = [
        {
            title: "Warehouses and Distribution Centers",
            desc: "Securing valuable inventory, creating separate storage areas, and restricting access to hazardous materials.",
            image: "/ex1.png",
        },
        {
            title: "Manufacturing Facilities",
            desc: "Guarding machinery, creating controlled environments for specific processes, and securing tool cribs and equipment.",
            image: "/ex2.png",
        },
        {
            title: "Data Centers",
            desc: "Securing server racks and IT equipment, ensuring data protection and compliance.",
            image: "/ex3.png",
        },
        
    ];

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
      
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                    Example Applications
                </h2>
                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="relative"
                >
                    <CarouselContent className="-ml-4">
                        {items.map((item, i) => (
                            <CarouselItem
                                key={i}
                                className="pl-4 md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="relative h-[380px] rounded-2xl overflow-hidden group">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-black/60" />

                                    <div className="absolute mt-12 p-6 flex flex-col justify-end text-white">
                                        <h3 className="text-3xl font-semibold mb-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-200 pr-4 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0 md:mx-[-25] -translate-x-1/2 bg-white shadow-md cursor-pointer" />
                    <CarouselNext className="right-0 md:mx-[-25]  translate-x-1/2 bg-orange-500 text-white shadow-md hover:bg-orange-600 cursor-pointer" />
                </Carousel>
            </div>
        </section>
    );
}
