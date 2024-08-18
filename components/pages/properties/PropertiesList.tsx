import { useMediaQuery } from "@/components/hooks/useMediaQuery"
import { useMapModal } from "@/hooks/useMapModal"
import { usePropretyPopup } from "@/hooks/usePropertyPopup"
import { CARD_DATA, PropertyType } from "@/lib/constants"
import { wait } from "@/lib/utils"
import { EasingOptions } from "mapbox-gl"
import Link from "next/link"
import { MouseEvent, useCallback } from "react"
import { useMap } from "react-map-gl"
import { PropertyCard } from "./PropertyCard"

// TODO: Make the ModalMap fly to a specific location in mobile

export const PropertiesList = () => {
  const { modalMap, mainMap } = useMap()
  const { setSelectedProperty } = usePropretyPopup()

  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const { openModal } = useMapModal()

  const handleLocateProperty = useCallback(
    async (e: MouseEvent<HTMLDivElement>, property: PropertyType) => {
      e.preventDefault()
      setSelectedProperty(property)
      const options: EasingOptions = {
        center: [property.coordinates.lng, property.coordinates.lat],
        speed: 1.7,
        zoom: 15.5,
        bearing: Math.floor(Math.random() * (120 - 20 + 1) + 20),
        pitch: 40,
        essential: true,
      }

      if (isDesktop) {
        mainMap?.flyTo(options)
      } else {
        openModal()
        await wait(1000)
        modalMap?.flyTo(options)
      }
    },
    [setSelectedProperty, isDesktop, mainMap, openModal, modalMap],
  )

  return (
    <section className="propreties-list grid max-h-[1000px] grid-cols-1 gap-4 overflow-y-scroll sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {CARD_DATA.map((property) => (
        <Link key={property.id} href={`/properties/${property.id}`}>
          <PropertyCard
            handleLocateProperty={handleLocateProperty}
            property={property}
          />
        </Link>
      ))}
    </section>
  )
}
