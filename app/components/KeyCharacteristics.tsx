import { FiShield, FiGrid, FiAlertTriangle } from "react-icons/fi";

export default function KeyCharacteristics() {
  const items = [
    {
      icon: <FiShield size={26} />,
      title: "Security",
      desc: "They prevent unauthorized access to valuable inventory, tools, equipment, or sensitive areas like server rooms and hazardous material storage.",
    },
    {
      icon: <FiGrid size={26} />,
      title: "Organization",
      desc: "They help streamline workflow by creating specific work zones and separating different types of processes or materials within a facility.",
    },
    {
      icon: <FiAlertTriangle size={26} />,
      title: "Safety",
      desc: "They contribute to a safer work environment by isolating hazardous areas or machinery and protecting employees from potential dangers.",
    },
  ];

  return (
    <section className="w-full bg-[#fff6e5] py-15">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Key Characteristics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mb-5">
                {item.icon}
              </div>

          
              <h3 className="text-lg font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-6 h-[1px] w-full bg-gray-100" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
