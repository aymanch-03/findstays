"use client"
import { PropertyBreadcrumb } from "@/components/pages/property/PorpertyBreadcrumb"
import { PropertyDetails } from "@/components/pages/property/PropertyDetails"
import { CARD_DATA } from "@/lib/constants"
import { useParams } from "next/navigation"
import { MapProvider } from "react-map-gl"

const PropertyPage = () => {
  const { propertyId } = useParams()
  const currentProperty = CARD_DATA.find((p) => p.id === Number(propertyId))

  if (!currentProperty) {
    return (
      <section className="container mt-[70px] py-10 text-center text-2xl">
        Property not found
      </section>
    )
  }

  return (
    <section className="container mt-[70px] py-10">
      <PropertyBreadcrumb property={currentProperty} />
      <MapProvider>
        <PropertyDetails property={currentProperty} />
      </MapProvider>
    </section>
  )
}

export default PropertyPage
