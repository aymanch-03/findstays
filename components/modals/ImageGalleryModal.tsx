"use client"
import { PropertyType } from "@/lib/constants"
import Fade from "embla-carousel-fade"
import { Dot, X } from "lucide-react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { Button } from "../ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog"
import { Modal, ModalContent, ModalDescription, ModalTitle } from "../ui/modal"
import { StarsReview } from "../ui/stars-review"

type Props = {
  property: PropertyType
  openGallery: boolean
  onCloseGallery: () => void
  images: string[]
  selectedIndex: number
}

export const ImageGalleryModal = ({
  property,
  images,
  openGallery,
  onCloseGallery,
  selectedIndex,
}: Props) => {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(selectedIndex)
  const [count, setCount] = useState(0)

  const onSelect = useCallback(() => {
    if (api) {
      setCurrent(api.selectedScrollSnap())
    }
  }, [api])

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  useEffect(() => {
    if (!api) return

    api.scrollTo(selectedIndex, true)
    setCurrent(selectedIndex)
  }, [selectedIndex, api])

  return (
    <Dialog open={openGallery} onOpenChange={onCloseGallery}>
      <DialogContent className="flex size-full max-w-none flex-col justify-center !rounded-none border-none bg-primary p-4 outline-none backdrop-blur-sm md:h-[100dvh]">
        <Button
          className={`absolute right-4 top-4 z-20 h-fit items-center justify-center gap-2 p-2`}
          onClick={onCloseGallery}
        >
          <X size={18} />
        </Button>
        <DialogTitle asChild>
          <section className="flex flex-col items-center gap-4 text-white">
            <h1 className="text-2xl font-medium sm:text-3xl md:text-4xl">
              {property.title}
            </h1>
            <div className="flex items-center gap-2">
              <span className="font-thin text-white/60">
                {property.location}
              </span>
              <Dot className="text-white/40" />
              <StarsReview rating={4} mode="light" />
            </div>
          </section>
        </DialogTitle>
        <DialogDescription asChild>
          <span className="sr-only"></span>
        </DialogDescription>
        <Carousel
          setApi={setApi}
          className="m-1 grid place-content-center"
          plugins={[Fade()]}
        >
          <CarouselContent className="h-full items-center">
            {images.map((image, index) => (
              <CarouselItem key={index} className="size-full overflow-hidden">
                <Image
                  width={3000}
                  height={3000}
                  src={image}
                  alt={image}
                  className="flex max-h-[400px] w-full items-center justify-center object-contain p-6 md:max-h-[620px]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="py-2 text-center text-lg text-white">
            {current + 1} / {count}
          </div>
          <CarouselPrevious variant={"ringHover"} />
          <CarouselNext variant={"ringHover"} />
        </Carousel>
      </DialogContent>
    </Dialog>
  )
}
