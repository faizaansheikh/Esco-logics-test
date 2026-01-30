import ProductCard from "../components/ProductCard";
import { products } from "../data";
import { IoIosSearch } from "react-icons/io";

const tabs = [
  "Latest",
  "Popular",
  "Featured",
  "Price: Low–High",
  "Price: High–Low",
];

const Products = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

        <div className="flex flex-wrap gap-6 text-sm">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`pb-1 ${
                index === 0
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search your product here"
            className="w-full border rounded-full py-3 px-5 pr-12 text-sm outline-none"
          />
          <button className="absolute right-1 top-1 bottom-1 bg-orange-500 w-10 rounded-full text-white flex items-center justify-center cursor-pointer">
            <IoIosSearch/>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
