import { Button } from "@/components/ui/button"
import { FOOTER_LINKS } from "@/lib/constants"
import Link from "next/link"
import React from "react"

export const Footer = () => {
  return (
    <footer className="relative py-10">
      <div className="absolute inset-0 left-0 -z-10 h-full w-full bg-white opacity-80 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#0f1729_100%)]"></div>{" "}
      <article className="container flex flex-col gap-12">
        <section className="flex flex-col items-center justify-center gap-6">
          <h1 className="self-center font-semibold text-primary">LOGO.</h1>
          <h1 className="text-center text-3xl leading-[1.5]">
            Discover your perfect getaway with Rentlify <br /> Where every stay
            feels like home.
          </h1>
          <div className="flex items-center rounded-full bg-primary/10">
            <input
              placeholder="Enter your email"
              className="w-[270px] flex-1 border-none bg-transparent px-6 py-3 text-sm font-medium outline-none placeholder:text-primary/90"
            />
            <Button className="h-full rounded-full py-3 text-sm">
              Subscribe
            </Button>
          </div>
        </section>
        <div className="flex items-center justify-center gap-1">
          {FOOTER_LINKS.map((link) => (
            <Button
              variant="linkHover2"
              className="font-medium text-primary"
              key={link}
            >
              <Link href={"#"}>{link}</Link>
            </Button>
          ))}
        </div>
      </article>
    </footer>
  )
}
