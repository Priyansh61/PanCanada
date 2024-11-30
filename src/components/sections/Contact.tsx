import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Contact() {
  return (
    <section className="bg-white py-20" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full lg:w-1/2">
            <h2 className="mb-8 text-4xl font-bold text-[#1A1A3A] sm:text-5xl lg:text-6xl">
              Let's Scale Your<br />Brand, Together
            </h2>
            <div className="relative h-[300px] w-full max-w-md">
              <Image
                src="/images/contact.png"
                alt="Growth illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" placeholder="Type Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="Type Phone Number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="Type Email Address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can we help? *</Label>
                <Textarea id="message" placeholder="Type Description" required />
              </div>
              <Button type="submit" className="w-full bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

