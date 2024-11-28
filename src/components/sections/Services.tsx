import { Briefcase, MessageCircle, Rocket } from 'lucide-react'

const services = [
  {
    icon: <Briefcase className="h-8 w-8 text-[#FF6B6B]" />,
    title: "Paid Search And Social Management",
    description: "Optimize your digital presence with our expert paid search and social media management services."
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-[#FF6B6B]" />,
    title: "Direct Response Content",
    description: "Create compelling content that drives immediate action and boosts your conversion rates."
  },
  {
    icon: <Rocket className="h-8 w-8 text-[#FF6B6B]" />,
    title: "CRO And Retention Optimizations",
    description: "Improve your conversion rates and customer retention with our data-driven optimization strategies."
  }
]

export default function Services() {
  return (
    <section className="bg-[#FF6B6B] py-20" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">What We Do</h2>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Each time a digital asset is purchased or sold, we donate a percentage of the fees back into the
            development of the asset through our charitable foundation.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FDF8F6]">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#1A1A3A]">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

