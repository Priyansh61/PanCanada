import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className=" py-20" id="about" style={{
      background: "linear-gradient(to top, #ff6b6b 0%, #ff3366 100%)"
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-md lg:w-1/3">
            {" "}
            {/* Adjust container size */}
            <Image
              src="/images/about-banner.png"
              alt="Growth Analytics Illustration"
              width={300} // Reduced width
              height={240} // Reduced height proportionally
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-5xl">
                Our Specialisation and Company Characteristics
              </h2>
              <p className="mb-8 text-lg text-white/90 lg:text-1xl">
                Our company matches companies/employers with skilled applicants
                who fit their standards. We offer staffing solutions for local,
                national, and global demands. Our mission is to help job
                searchers find new opportunities while also supporting employers
                in selecting the ideal candidate for open positions.
              </p>
              <Button
                size="lg"
                className="bg-white text-[#FF6B6B] hover:bg-white/90"
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
