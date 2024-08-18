import { Button } from "@/components/ui/button"
import { StarsReview } from "@/components/ui/stars-review"
import { StarFilledIcon } from "@radix-ui/react-icons"
import { MessageCircleMore } from "lucide-react"
import Image from "next/image"
import React, { FC } from "react"

type ExploreCardProps = {
  title: string
  image: string
  location: string
  visitors: number
}

export const ExploreCard: FC<ExploreCardProps> = ({
  title,
  image,
  location,
  visitors,
}) => {
  return (
    <article className="group flex h-[368px] cursor-pointer flex-col gap-2.5 transition-all duration-300">
      <div
        className="relative z-10 min-h-[250px] w-full rounded-xl bg-cover bg-center bg-no-repeat transition-all group-hover:min-h-[180px]"
        style={{ backgroundImage: `url(${image})` }}
      />
      <p className="text-2xl text-black">{title}</p>
      <p className="text-xl text-black">{location}</p>
      <div className="flex items-center gap-2">
        <StarsReview rating={4} mode="dark" />
        <span className="text-lg font-thin">({visitors} Visitors)</span>
      </div>
      <div className="invisible flex h-[60px] items-stretch gap-3 opacity-0 transition-all duration-300 *:h-full group-hover:visible group-hover:opacity-100 group-hover:*:opacity-100">
        <Button className="flex-1 rounded-full text-lg" size={"lg"}>
          Book now
        </Button>
        <Button
          variant={"secondaryRingHover"}
          className="aspect-square rounded-full border-[1.5px] border-black bg-transparent text-black"
        >
          <MessageCircleMore color="black" className="shrink-0" size={28} />
        </Button>
      </div>
    </article>
  )
}
