"use client"
import { motion } from "framer-motion"
import React, { FC } from "react"
import { SearchPropretyForm } from "./SearchPropertyForm"

const Hero: FC = () => {
  return (
    <section className="container relative z-20 flex h-full flex-col justify-center gap-10 transition-all">
      <article className="flex flex-col items-center gap-10 text-white lg:flex-row lg:gap-3">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1 space-y-3 lg:space-y-6"
        >
          <h1 className="whitespace-nowrap text-center text-5xl font-medium capitalize leading-[1.25] sm:text-6xl sm:leading-[1.1] md:text-8xl md:leading-[1.2] lg:text-left lg:text-[110px] lg:leading-[1.3]">
            Stay Quietly, <br />
            With no Worries
          </h1>
          <p className="w-full text-center text-base font-normal !leading-[1.9] md:text-lg lg:w-2/3 lg:text-left lg:text-xl">
            Welcome to our hotel booking platform, where your travel experience
            becomes easier and more enjoyable. With our platform, you can
            discover perfect accommodation for your stay worldwide.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-row items-start justify-between gap-10 lg:flex-col"
        >
          <div className="flex flex-col">
            <h1 className="text-center text-4xl font-medium md:text-5xl lg:text-left lg:text-6xl">
              12k+
            </h1>
            <p className="text-center text-lg capitalize lg:text-left lg:text-xl">
              satisfied visitors
            </p>
          </div>
          <div className="flex flex-col text-left">
            <h1 className="text-center text-4xl font-medium md:text-5xl lg:text-left lg:text-6xl">
              4.5k+
            </h1>
            <p className="text-center text-lg capitalize lg:text-left lg:text-xl">
              Amazing TourGuide
            </p>
          </div>
          <div className="flex flex-col text-left">
            <h1 className="text-center text-4xl font-medium md:text-5xl lg:text-left lg:text-6xl">
              2k+
            </h1>
            <p className="text-center text-lg capitalize lg:text-left lg:text-xl">
              special travel trip
            </p>
          </div>
        </motion.div>
      </article>
      <SearchPropretyForm />
    </section>
  )
}

export default Hero
