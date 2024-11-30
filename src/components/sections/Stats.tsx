"use client"

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface StatItemProps {
  value: number
  suffix: string
  label: string
  duration?: number
}

function StatItem({ value, suffix, label, duration = 2000 }: StatItemProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = value
      const incrementTime = duration / end
      const counter = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(counter)
      }, incrementTime)

      return () => clearInterval(counter)
    }
  }, [inView, value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="mb-2 flex items-center justify-center">
        <span className="text-4xl font-bold text-[#1A1A3A] sm:text-5xl lg:text-6xl">
          {count}
        </span>
        <span className="text-4xl font-bold text-[#FF6B6B] sm:text-5xl lg:text-6xl">
          {suffix}
        </span>
      </div>
      <p className="text-base text-gray-600 sm:text-lg">{label}</p>
    </div>
  )
}

export default function StatsSection() {
  const stats = [
    { value: 15, suffix: "+", label: "Countries Covered" },
    { value: 99, suffix: "%", label: "Success Rate" },
    { value: 542, suffix: "+", label: "Projects Completed" },
    { value: 25, suffix: "+", label: "Years Of Experience" },
  ]

  return (
    <section className="bg-gradient-to-b from-[#FDF8F6] to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

