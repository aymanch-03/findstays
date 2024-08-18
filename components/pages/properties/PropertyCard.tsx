import { StarsReview } from "@/components/ui/stars-review"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { PropertyType } from "@/lib/constants"
import { Heart, MapPinned } from "lucide-react"
import { MouseEvent } from "react"

type PropretyCardProps = {
  property: PropertyType
  isMapCard?: boolean
  handleLocateProperty?: (
    e: MouseEvent<HTMLDivElement>,
    property: PropertyType,
  ) => void
}

export const PropertyCard = ({
  property,
  isMapCard = false,
  handleLocateProperty,
}: PropretyCardProps) => {
  return (
    <article className="flex cursor-pointer flex-col gap-1">
      <div
        style={{ backgroundImage: `url(${property.imageUrl})` }}
        className="relative h-[280px] w-full rounded-2xl bg-cover bg-center bg-no-repeat lg:h-[250px]"
      >
        {!isMapCard && handleLocateProperty && (
          <>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="group absolute left-4 top-4 flex cursor-pointer items-center justify-center rounded-full bg-white p-1.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Heart
                    fill="transparent"
                    strokeWidth={1.25}
                    className="size-5 transition group-hover:fill-red-500"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span>Add to favorites</span>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="group absolute right-4 top-4 flex cursor-pointer items-center justify-center rounded-full bg-white p-1.5"
                  onClick={(e) => handleLocateProperty(e, property)}
                >
                  <MapPinned
                    fill="transparent"
                    strokeWidth={1.25}
                    className="size-5 transition group-hover:fill-primary/5"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span>Discover property location</span>
              </TooltipContent>
            </Tooltip>
          </>
        )}
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="backdropp-blur py group absolute bottom-4 right-4 flex cursor-pointer items-center justify-center rounded-full bg-primary/90 px-2 text-white">
              <p className="text-sm">
                <span className="text-[15px]">
                  {property.price.toLocaleString()}
                </span>{" "}
                MAD
              </p>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <span>Price per night</span>
          </TooltipContent>
        </Tooltip>
      </div>

      <p className="text-lg text-primary">{property.title}</p>
      <p className="text-base text-primary/60">{property.location}</p>
      <div className="flex items-center gap-2">
        <StarsReview rating={4} mode="dark" />
        <span className="text-base font-thin">
          ({property.visitors} Visitors)
        </span>
      </div>
    </article>
  )
}
