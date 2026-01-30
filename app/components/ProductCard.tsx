
import { CiHeart } from "react-icons/ci";
const ProductCard = ({ product }: any) => {
    return (
        <div className=" rounded-2xl   relative hover:shadow-md transition pb-4 flex flex-col h-full ">
            <div className="bg-gray-100 p-4 rounded-lg">
                {product.featured && (
                    <span className="absolute top-4 left-[-5] shadow bg-[#FFA240] text-white text-xs px-4 py-1 rounded-r-full">
                        Featured
                    </span>
                )}

                <button className="absolute top-4 bg-white p-2 rounded-full right-4 text-gray-800 hover:text-white hover:bg-orange-500 cursor-pointer transition-all duration-500">
                    <CiHeart />
                </button>
                <div className="h-48 flex items-center justify-center mt-8 mb-4 ">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full object-contain"
                    />
                </div>


            </div>



            <div className="flex justify-center flex-col gap-3 mt-auto pt-4">
                <h3 className="text-sm font-semibold mb-3  leading-snug">
                    {product.title}
                </h3>
                <div className="mt-6 h-[1px] w-full bg-gray-500 " />
                <p className="text-red-700 font-bold mb-4">
                    ${product.priceMin.toLocaleString()} – $
                    {product.priceMax.toLocaleString()}
                </p>
                <div className="flex gap-3">
                    <button className="flex-1 bg-[#FFA240] hover:bg-orange-600 text-white py-3 rounded-full text-sm cursor-pointer transition-all duration-500">
                        Add to Cart
                    </button>
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-full text-sm cursor-pointer transition-all duration-500">
                        Select options
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
