import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TextEffect } from "@/components/ui/text-effect"
import { CARD_DATA } from "@/lib/constants"
import React, { FC } from "react"
import { ExploreCard } from "./ExploreCard"

type Props = {}

export const ExploreSection: FC<Props> = (props) => {
  return (
    <section className="container relative my-16 flex flex-col gap-6 py-10 md:gap-8 lg:gap-10">
      <TextEffect label="Explore" position="right" />
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
        <h1 className="w-full flex-1 text-center text-4xl font-medium capitalize !leading-[1.4] md:text-left md:text-5xl lg:text-6xl">
          Explore Our Best List <br /> 5-Stars Hotel!
        </h1>
        <div className="flex flex-col gap-5 md:basis-[40%]">
          <p className="mx-auto text-center text-xl font-thin !leading-[2] text-black/50 md:text-left md:text-2xl">
            We understand that every traveler has different preferences.{" "}
            {"That's"} why our {"platform's"} good.
          </p>
          <Input
            className="h-auto rounded-full p-5 text-2xl shadow-none placeholder:text-black/30"
            placeholder="Find Hotel"
          />
        </div>
      </div>
      <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {CARD_DATA.slice(0, 6).map((card, index) => (
          <ExploreCard
            key={index}
            title={card.title}
            image={card.imageUrl}
            location={card.location}
            visitors={card.visitors}
          />
        ))}
      </section>
      <Button
        className="mx-auto my-10 w-auto rounded-full border-[1.5px] border-black/20 bg-white px-24 py-7 text-lg text-black hover:border-transparent hover:text-white"
        size={"lg"}
      >
        View More
      </Button>
    </section>
  )
}
