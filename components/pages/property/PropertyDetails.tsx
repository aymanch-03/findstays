"use client"
import { Footer } from "@/components/global/Footer"
import { Button } from "@/components/ui/button"
import { FacilityBadge } from "@/components/ui/facility"
import { Mapbox } from "@/components/ui/mapbox"
import { StarsReview } from "@/components/ui/stars-review"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { usePropretyPopup } from "@/hooks/usePropertyPopup"
import { facilities, PropertyType } from "@/lib/constants"
import { Dot, Heart, MapPinned, Share2 } from "lucide-react"
import { EasingOptions } from "mapbox-gl"
import { useCallback, useEffect } from "react"
import { useMap } from "react-map-gl"
import { PropertyImageGallery } from "./PropertyImageGallery"
import ReservationForm from "./ReservationForm"

export const PropertyDetails = ({ property }: { property: PropertyType }) => {
  const { setSelectedProperty } = usePropretyPopup()
  const { propertyMap } = useMap()
  const { title, location, visitors, price, imageUrl, coordinates } = property

  useEffect(() => flyToProperty(), [])

  const flyToProperty = useCallback(() => {
    setSelectedProperty(property)
    const options: EasingOptions = {
      center: [coordinates.lng, coordinates.lat],
      speed: 1.7,
      zoom: 16.5,
      bearing: 60,
      pitch: 40,
      essential: true,
    }
    propertyMap?.flyTo(options)
  }, [
    coordinates.lat,
    coordinates.lng,
    property,
    propertyMap,
    setSelectedProperty,
  ])

  return (
    <main className="relative flex flex-col gap-6 py-10">
      <section className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-medium sm:text-3xl md:text-4xl">
            {title}
          </h1>
          <div className="flex items-center gap-2">
            <span className="font-thin text-primary/60">{location}</span>
            <Dot className="text-primary/40" />
            <StarsReview rating={4} mode="dark" />
          </div>
        </div>
        <div className="flex items-center gap-3 max-sm:-order-1 max-sm:w-full max-sm:justify-between">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size={"icon"}
                variant={"secondaryRingHover"}
                className="size-9 rounded-full"
              >
                <Share2 strokeWidth={1.5} size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="mb-1.5 text-sm">
              Share the property
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size={"icon"}
                variant={"secondaryRingHover"}
                className="size-9 rounded-full"
              >
                <Heart strokeWidth={1.5} size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="mb-1.5 text-sm">
              Save as favorites
            </TooltipContent>
          </Tooltip>
        </div>
      </section>
      <article className="flex flex-col items-start gap-4 lg:flex-row">
        <main className="flex w-full flex-col gap-6">
          <PropertyImageGallery
            property={property}
            images={[
              imageUrl,
              "/images/living_room.jpg",
              imageUrl,
              imageUrl,
              imageUrl,
            ]}
          />
          <section className="my-8 flex flex-col gap-16">
            <div className="space-y-4">
              <h1 className="text-xl font-medium md:text-2xl lg:text-3xl">
                About
              </h1>
              <p className="text-justify text-base font-thin text-primary/50 md:text-lg lg:text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                placeat soluta impedit ratione nesciunt dolor eveniet? Vitae
                recusandae id impedit, ducimus dolore sunt eius sequi cupiditate
                rem ipsam assumenda voluptatem! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nulla, corrupti maiores! Unde
                eius, accusantium quasi facilis expedita rem est repellendus?
                Cum quibusdam dicta eveniet temporibus! Aut voluptatum totam
                saepe laborum!
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-medium md:text-2xl lg:text-3xl">
                Facilities
              </h1>
              <div className="flex flex-wrap gap-3 text-justify text-base font-thin text-primary/50 md:text-lg lg:text-xl">
                {facilities.map((facility, index) => (
                  <FacilityBadge
                    key={index}
                    icon={facility.icon}
                    title={facility.title}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-medium md:text-2xl lg:text-3xl">
                  Location
                </h1>
                <Button
                  className={`flex items-center justify-center gap-2`}
                  onClick={flyToProperty}
                >
                  Go to Property
                  <MapPinned size={18} />
                </Button>
              </div>
              <div className="h-[500px] overflow-hidden rounded-lg">
                <Mapbox id={"propertyMap"} classname="size-full" />
              </div>
            </div>
            {/* <div className="space-y-4">
              <h1 className="text-xl font-medium capitalize md:text-2xl lg:text-3xl">
                Property Host
              </h1>
            </div> */}
          </section>
        </main>
        <ReservationForm property={property} />
      </article>
    </main>
  )
}
