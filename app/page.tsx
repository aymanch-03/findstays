"use client"
import { Footer } from "@/components/global/Footer"
import { ExploreSection } from "@/components/pages/home/Explore"
import Hero from "@/components/pages/home/Hero"
import { MostVisited } from "@/components/pages/home/MostVisited"
import { Testimonials } from "@/components/pages/home/Testimonials"
import { useAuthModal } from "@/hooks/useAuthModal"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const searchParams = useSearchParams()
  const auth = searchParams.get("auth")
  const { openAuthModal } = useAuthModal()
  useEffect(() => {
    if (auth && auth === "false") {
      openAuthModal()
    }
  }, [auth])

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mx-auto h-auto bg-cover bg-center bg-no-repeat py-32 before:absolute before:inset-0 before:z-10 before:size-full before:bg-gradient-to-b before:from-black/90 before:to-black/30 before:content-[''] md:h-screen lg:h-[915px]"
        style={{ backgroundImage: "url(./images/home_bg.jpeg)" }}
      >
        <Hero />
        <svg
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          className="absolute bottom-[-40px] left-0 z-[15] w-full"
          viewBox="0 0 1440 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="#fff" offset="0%"></stop>
              <stop stopColor="#fff" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,10L120,20C240,30,480,50,720,48.3C960,47,1200,23,1440,21.7C1680,20,1920,40,2160,53.3C2400,67,2640,73,2880,71.7C3120,70,3360,60,3600,50C3840,40,4080,30,4320,23.3C4560,17,4800,13,5040,11.7C5280,10,5520,10,5760,18.3C6000,27,6240,43,6480,55C6720,67,6960,73,7200,65C7440,57,7680,33,7920,23.3C8160,13,8400,17,8640,28.3C8880,40,9120,60,9360,60C9600,60,9840,40,10080,36.7C10320,33,10560,47,10800,51.7C11040,57,11280,53,11520,53.3C11760,53,12000,57,12240,60C12480,63,12720,67,12960,63.3C13200,60,13440,50,13680,38.3C13920,27,14160,13,14400,10C14640,7,14880,13,15120,25C15360,37,15600,53,15840,58.3C16080,63,16320,57,16560,58.3C16800,60,17040,70,17160,75L17280,80L17280,100L17160,100C17040,100,16800,100,16560,100C16320,100,16080,100,15840,100C15600,100,15360,100,15120,100C14880,100,14640,100,14400,100C14160,100,13920,100,13680,100C13440,100,13200,100,12960,100C12720,100,12480,100,12240,100C12000,100,11760,100,11520,100C11280,100,11040,100,10800,100C10560,100,10320,100,10080,100C9840,100,9600,100,9360,100C9120,100,8880,100,8640,100C8400,100,8160,100,7920,100C7680,100,7440,100,7200,100C6960,100,6720,100,6480,100C6240,100,6000,100,5760,100C5520,100,5280,100,5040,100C4800,100,4560,100,4320,100C4080,100,3840,100,3600,100C3360,100,3120,100,2880,100C2640,100,2400,100,2160,100C1920,100,1680,100,1440,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z"
          ></path>
        </svg>
      </motion.section>
      <MostVisited />
      <ExploreSection />
      <Testimonials />
      <Footer />
    </>
  )
}
