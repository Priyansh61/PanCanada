import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20" id="home">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 left-96 ml-[425px]   mt-4 mb-4 ">
        <Image
          src="/images/bg.png" 
          alt="Background"
          layout="fill"
          objectFit="contain"
          className="z-0"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="hero-content max-w-2xl text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#1A1A3A] sm:text-5xl md:text-5xl">
              The Brassfield Turner Group provides a wide range of services
            </h1>
            <p className="mb-8 text-lg text-gray-600 sm:text-xl">
              Our expertise has been founded on our talents, values, ability to
              innovate, and passion.
            </p>
            <Button
              size="lg"
              className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90"
            >
              Get started
            </Button>
          </div>
          <div className="hero-banner mt-10 w-full max-w-2xl  mr-6 lg:mt-0">
            <Image
              src="/images/hero-banner.png"
              alt="Hero banner"
              width={600}
              height={400}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
