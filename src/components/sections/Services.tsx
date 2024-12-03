import React, { useState } from "react";
import { Car, Building, Coffee, Recycle, Settings, Package } from "lucide-react"; // I changed Tool to Settings

const services = [
  {
    icon: <Car className="h-12 w-12 text-[#FF6B6B]" />,
    title: "Engineering Solutions",
    description:
      "Cutting-edge engineering solutions for automotive and industrial projects, ensuring innovation and efficiency."
  },
  {
    icon: <Building className="h-12 w-12 text-[#FF6B6B]" />,
    title: "Construction Management",
    description:
      "Comprehensive project planning, safety compliance, and on-site supervision for timely, budget-friendly construction."
  },
  {
    icon: <Coffee className="h-12 w-12 text-[#FF6B6B]" />,
    title: "Hospitality Consulting",
    description:
      "Optimizing hotel and resort operations to enhance guest experiences and increase profitability."
  },
  {
    icon: <Recycle className="h-12 w-12 text-[#FF6B6B]" />,
    title: "Sustainability Initiatives",
    description:
      "Helping businesses implement green building designs and sustainable practices to reduce environmental impact."
  },
  {
    icon: <Settings className="h-12 w-12 text-[#FF6B6B]" />, // Changed Tool to Settings
    title: "Facility Maintenance",
    description:
      "Proactive management services to keep facilities safe, operational, and well-maintained."
  },
  {
    icon: <Package className="h-12 w-12 text-[#FF6B6B]" />,
    title: "Logistics Optimization",
    description:
      "Streamlining logistics and supply chain operations to boost efficiency and reduce costs."
  }
];

export default function Services() {
  const [showAll, setShowAll] = useState(false); // State to toggle between 3 and all services

  const handleToggle = () => {
    setShowAll(!showAll); // Toggle the state
  };

  return (
    <section className="py-20 " id="services" style={{
      background: "linear-gradient(to top, #ff6b6b 0%, #ff3366 100%)"
    }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            The Brassfield Turner Group provides a wide range of services to help businesses succeed.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, showAll ? services.length : 3).map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FDF8F6]">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleToggle}
            className="bg-white text-[#e64a4a] py-2 px-6 rounded-lg hover:bg-gray-200 transition   duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
