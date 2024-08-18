/* eslint-disable react/no-unescaped-entities */
import { Avatar } from "@/components/ui/avatar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { CARD_DATA } from "@/lib/constants"
import UserImage from "@/public/images/user.jpeg"
import AutoScroll from "embla-carousel-auto-scroll"
import Image from "next/image"
import { MostVisitedCard } from "./MostVisitedCard"

export const TestimonialsCarousel = () => {
  return (
    <Carousel
      plugins={[
        AutoScroll({
          stopOnMouseEnter: true,
          stopOnInteraction: false,
          stopOnFocusIn: false,
          speed: 2,
          startDelay: 0,
        }),
      ]}
      opts={{ loop: true, watchDrag: false }}
      className="relative my-14"
    >
      <CarouselContent>
        {CARD_DATA.map((item, index) => (
          <CarouselItem
            key={index}
            className="mx-1 flex h-auto basis-[80%] flex-col gap-6 rounded-xl bg-[#292929] p-6 md:mx-3 md:basis-[50%] lg:mx-5 lg:basis-[32%]"
          >
            <p className="text-xl font-thin leading-9 text-white">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto inventore accusamus hic pariatur. Sequi officiis est
              nesciunt? In deleniti nam, ipsa doloribus"
            </p>
            <div className="flex items-center gap-3">
              <Avatar className="grid size-12 place-content-center">
                <Image src={UserImage} alt="User1" />
              </Avatar>
              <div className="flex flex-col justify-between text-lg font-thin text-white">
                <span>Ayman</span>
                <span className="opacity-60">Morocco</span>
              </div>
            </div>
            <MostVisitedCard
              classname="h-[300px]"
              grid={false}
              index={index}
              title={item.title}
              location={item.location}
              imageUrl={item.imageUrl}
              visitors={item.visitors}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
