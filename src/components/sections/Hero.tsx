import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FDF8F6] py-20" id="home">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="hero-content max-w-2xl text-center lg:text-left">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#1A1A3A] sm:text-5xl md:text-6xl">
            Your full-funnel growth agency
          </h1>
          <p className="mb-8 text-lg text-gray-600 sm:text-xl">
            Capture and retrieve your lists across devices to help you stay organized at work, home, and on the go.
          </p>
          <Button 
            size="lg" 
            className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90"
          >
            Get started
          </Button>
        </div>
        <div className="hero-banner mt-10 w-full max-w-2xl lg:mt-0">
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
    <Image
      src="/images/bg.png"
      alt="Background shape"
      fill
      className="shape-content"
      priority
    />
  </section>
  );
};

export default HeroSection;
