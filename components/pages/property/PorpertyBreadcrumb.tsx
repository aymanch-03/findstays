import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { PropertyType } from "@/lib/constants"
import { Dot, MoveLeft } from "lucide-react"
import Link from "next/link"

type Props = {
  property: PropertyType
}

export const PropertyBreadcrumb = ({ property }: Props) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-0.5 text-sm sm:gap-1 md:text-base">
        <BreadcrumbItem>
          <Link
            href={{
              pathname: "/properties",
              query: {
                lat: property.coordinates.lat,
                lng: property.coordinates.lng,
              },
            }}
            className="flex items-center gap-2 transition-all hover:gap-1.5 sm:gap-4 sm:hover:gap-2"
          >
            <MoveLeft strokeWidth={1} /> Search
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="">
          <Dot />
        </BreadcrumbSeparator>
        <BreadcrumbItem className="text-primary">Details</BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
