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
              className="md:block h-auto w-auto mx-auto"
              priority
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-5xl">
              "Shaping Industries, Inspiring Excellence"
              </h2>
              <p className="mb-8 text-lg text-white/90 lg:text-1xl">
              At PanCanada, we believe in transforming industries with innovative solutions and unwavering commitment. With decades of expertise in construction, hospitality, and engineering, we empower businesses to excel in a rapidly changing world.

Our mission is to drive progress by delivering tailored services that prioritize efficiency, sustainability, and growth. By blending industry expertise with cutting-edge technology, we solve complex challenges, ensuring our clients remain at the forefront of their respective sectors.
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
