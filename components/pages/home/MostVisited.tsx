import { TextEffect } from "@/components/ui/text-effect"
import { CARD_DATA } from "@/lib/constants"
import { MostVisitedCard } from "./MostVisitedCard"

export const MostVisited = () => {
  return (
    <section className="container relative my-20 flex flex-col gap-6 py-10 md:gap-8 lg:gap-10">
      <h1 className="text-center text-4xl font-medium capitalize !leading-[1.4] md:text-5xl lg:text-6xl">
        Our Most Amazing <br /> Visited Hotels on 2024!
      </h1>
      <TextEffect label="Amazing" />
      <p className="mx-auto max-w-[800px] text-center text-xl font-thin !leading-[2] text-black/50 md:text-2xl">
        Take a look our best choice for the hotels of the year, we pick the
        hotels from our amazing visitors
      </p>
      <div className="grid h-auto grid-cols-1 gap-5 md:h-[650px] md:grid-cols-2 lg:grid-cols-[1fr_0.5fr]">
        {CARD_DATA.slice(0, 3).map((hotel, index) => (
          <MostVisitedCard
            key={index}
            index={index}
            title={hotel.title}
            location={hotel.location}
            imageUrl={hotel.imageUrl}
            visitors={hotel.visitors}
          />
        ))}
      </div>
    </section>
  )
}
