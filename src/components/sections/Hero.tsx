import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden py-[10rem] min-h-64 flex  bg-no-repeat bg-left"
      id="home"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "750px",
        backgroundPosition: "100% 1%",
      }}
    >
      <div className="container mx-auto   max-w-7xl relative z-10">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="hero-content max-w-2xl text-center lg:text-left">
          <h1 className="mb-6 font-bold tracking-tight text-[#1A1A3A] text-[50px] font-sans">
          Empowering Industries, Elevating Standards
            </h1>
            <p className="mb-8 text-lg text-gray-600 sm:text-xl">
              Innovating Solutions, Transforming Tomorrow
            </p>
            <Button
              size="lg"
              className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90"
            >
              Get started
            </Button>
          </div>
          <div className="hero-banner mt-10 w-full max-w-lg lg:mt-0">
            <Image
              src="/images/hero-banner.png"
              alt="Hero banner"
              width={300} // Reduced size
              height={200} // Reduced size
              className="hidden md:block h-auto w-auto mx-auto" // Hidden on mobile
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
