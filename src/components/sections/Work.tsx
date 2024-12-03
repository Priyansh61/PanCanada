import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, ShoppingCart, BarChart3 } from "lucide-react";

const strategies = [
  {
    icon: <TrendingUp className="h-8 w-8 text-[#FF6B6B]" />,
    title: "Construction Industry",
    description:
      "The Brassfield Turner Group has worked on a variety of projects for architects, civil engineers, business interests, cities, and other governmental agencies. Concrete installation and scanning for a range of foundation construction projects, including schools, hospitals, office buildings, shopping malls, highways, and bridges, have been performed by the Brassfield Turner Group.",
    image: "/images/construction_01.jpg",
    imageAlt: "Full-Funnel Optimization Diagram",
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-[#FF6B6B]" />,
    title: "Automobiles Industry",
    description:
      "Our engineering and manufacturing teams connect on a regular basis. Ideas are being investigated. It is feasible to forecast performance. Delivery and optimizations of solutions. Our predictive engineering team reacts promptly and precisely to inquiries concerning a product’s durability, safety, manufacturing ease, and real-world performance.",
    image: "/images/automobiles_01.jpg?height=300&width=400",
    imageAlt: "E-commerce Growth Chart",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-[#FF6B6B]" />,
    title: "Hotel Industry",
    description:
      "We own, run, and manage four major hotel brands in five Canadian provinces. With us as a partner, you’ll discover a dedication to both personal and professional development via genuine, passionate hospitality that gives your employees and visitors a genuine home away from home experience.",
    image: "/images/hotel_01.jpg?height=300&width=400",
    imageAlt: "SaaS Metrics Dashboard",
  },
];

export default function Work() {
  return (
    <section
      className="bg-gradient-to-b from-white to-[#FDF8F6] py-20"
      id="growth-strategies"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#1A1A3A] sm:text-4xl lg:text-5xl">
          Our Expertise, Your Advantage
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Discover the range of services PanCanada offers to help businesses thrive. 
          </p>
        </div>

        <div className="space-y-24">
          {strategies.map((strategy, index) => (
            <div key={strategy.title} className="group relative">
              <div
                className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative w-full overflow-hidden rounded-lg lg:w-1/2">
                  <div className="absolute inset-0 bg-[#FF6B6B] opacity-10 transition-opacity duration-300 group-hover:opacity-20" />
                  <Image
                    src={strategy.image}
                    alt={strategy.imageAlt}
                    width={400}
                    height={300}
                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#FDF8F6]">
                    {strategy.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-[#1A1A3A]">
                    {strategy.title}
                  </h3>
                  <p className="mb-6 text-gray-600">{strategy.description}</p>
                  <Button
                    variant="ghost"
                    className="group text-[#FF6B6B] hover:text-[#FF6B6B]/90"
                  >
                    Explore Strategy
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl bg-[#FDF8F6] opacity-0 transition-all duration-300 group-hover:opacity-10 lg:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
