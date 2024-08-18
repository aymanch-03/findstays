import React from "react"
import { TestimonialsCarousel } from "./TestimonialsCarousel"

export const Testimonials = () => {
  return (
    <section className="relative bg-[#222] py-20">
      <div className="pointer-events-none absolute left-0 top-0 z-10 size-full bg-gradient-to-r from-black/75 via-transparent to-black/75" />
      <h1 className="text-center text-3xl font-medium capitalize !leading-[1.4] text-white md:text-4xl lg:text-5xl">
        {"Let's"} Hear How Their Experiences <br /> Use Our Platform
      </h1>
      <TestimonialsCarousel />
    </section>
  )
}
