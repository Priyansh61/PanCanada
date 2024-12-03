import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section
      className="py-20"
      id="about"
      style={{
        background: "linear-gradient(to bottom, #FF6B6B, #FF8E8E)", 
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Image Section */}
          <div className="relative w-full max-w-sm lg:w-1/3">
            <Image
              src="/images/about-banner.png"
              alt="Growth Analytics Illustration"
              width={300} 
              height={240} 
              className="h-auto w-full rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              priority
            />
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-5xl">
                Our Specialisation and Company Characteristics
              </h2>
              <p className="mb-8 text-lg text-white/90">
                "Our company connects employers with skilled candidates who meet
                their needs. We provide staffing solutions for local and global
                requirements, helping job seekers discover opportunities while
                aiding employers in finding the perfect fit."
              </p>
              <Button
                size="lg"
                className="bg-white text-[#FF6B6B] hover:bg-[#FFECEC] hover:text-[#E64A4A] transition duration-300 py-3 px-6 rounded-lg shadow-lg"
              >
                SIGN UP FOR FREE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
