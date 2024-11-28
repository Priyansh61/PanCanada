import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section className="bg-[#FF6B6B] py-20" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-xl lg:w-1/2">
            <Image
              src="/images/about-banner.png"
              alt="Growth Analytics Illustration"
              width={500}
              height={400}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                We're Obsessed With Growth
              </h2>
              <p className="mb-8 text-lg text-white/90">
                Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the
                development of the asset through its charitable foundation.
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
  )
}

