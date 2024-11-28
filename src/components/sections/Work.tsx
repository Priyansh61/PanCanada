import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, ShoppingCart, BarChart3 } from 'lucide-react'

const strategies = [
  {
    icon: <TrendingUp className="h-8 w-8 text-[#FF6B6B]" />,
    title: "Full-Funnel Optimization",
    description: "We optimize every stage of your customer journey, from awareness to conversion and retention, ensuring maximum ROI across all touchpoints.",
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "Full-Funnel Optimization Diagram"
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-[#FF6B6B]" />,
    title: "E-commerce Acceleration",
    description: "Supercharge your online store with our data-driven strategies, enhancing user experience, and skyrocketing your conversion rates.",
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "E-commerce Growth Chart"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-[#FF6B6B]" />,
    title: "SaaS Growth Hacking",
    description: "Leverage our expertise in SaaS metrics and growth strategies to optimize your customer acquisition, reduce churn, and maximize lifetime value.",
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "SaaS Metrics Dashboard"
  }
]

export default function Work() {
  return (
    <section className="bg-gradient-to-b from-white to-[#FDF8F6] py-20" id="growth-strategies">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#1A1A3A] sm:text-4xl lg:text-5xl">
            Accelerate Your Growth
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Our team of growth experts is obsessed with driving results. We combine data-driven insights with creative strategies to propel your business forward.
          </p>
        </div>

        <div className="space-y-24">
          {strategies.map((strategy, index) => (
            <div 
              key={strategy.title}
              className="group relative"
            >
              <div className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
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
                  <p className="mb-6 text-gray-600">
                    {strategy.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="group text-[#FF6B6B] hover:text-[#FF6B6B]/90"
                  >
                    Explore Strategy
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl bg-[#FDF8F6] opacity-0 transition-all duration-300 group-hover:opacity-100 lg:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

