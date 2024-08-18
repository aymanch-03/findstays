"use client"
import { useMapModal } from "@/hooks/useMapModal"
import { usePropretyPopup } from "@/hooks/usePropertyPopup"
import { CARD_DATA } from "@/lib/constants"
import { cn, wait } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Expand, X } from "lucide-react"
import "mapbox-gl/dist/mapbox-gl.css"
import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"
import { useEffect, useMemo } from "react"
import { Map, MapProvider, Marker, Popup, useMap } from "react-map-gl"
import { PropertyCard } from "../pages/properties/PropertyCard"
import { Button } from "./button"
type MapboxProps = {
  id: string
  isDialog?: boolean
  classname?: string
}

export const Mapbox = ({ classname, id, isDialog = false }: MapboxProps) => {
  const { mainMap, modalMap } = useMap()
  const { openModal } = useMapModal()
  const { selectedProperty, setSelectedProperty } = usePropretyPopup()
  const params = useParams()
  // Parameters are used to center the map in the previous location
  const searchParams = useSearchParams()
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")

  // Centering the map to ensure all locations are visible within the frame
  const middleLatitude =
    CARD_DATA.reduce((acc, curr) => acc + curr.coordinates.lat, 0) /
    CARD_DATA.length
  const middleLongitude =
    CARD_DATA.reduce((acc, curr) => acc + curr.coordinates.lng, 0) /
    CARD_DATA.length

  useEffect(() => {
    if (lat && lng && searchParams.size > 0) {
      mainMap?.flyTo({
        center: [Number(lng), Number(lat)],
        speed: 1.7,
        zoom: 15.5,
        bearing: Math.floor(Math.random() * (120 - 20 + 1) + 20),
        pitch: 40,
        essential: true,
      })
    }
  }, [lat, lng, searchParams.size, mainMap])

  return (
    <section className={cn("relative h-full w-[90vw]", classname)}>
      <Button
        className={`absolute z-20 ${!isDialog ? "left-4" : "right-4 h-fit p-2"} top-4 flex items-center justify-center gap-2 !font-text`}
        onClick={openModal}
      >
        {isDialog ? <X size={18} /> : "Expand Map"}{" "}
        {isDialog ? null : <Expand size={18} className="pt-0.5" />}
      </Button>
      <Map
        id={id}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
        initialViewState={{
          latitude: middleLatitude,
          longitude: middleLongitude,
          zoom: 11,
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transition: "all 0.3s",
        }}
        mapStyle="mapbox://styles/devvayman/clzppa8q1009101r0c8ggfi9k"
      >
        {CARD_DATA.map((c, index) => (
          <Marker
            key={index}
            latitude={c.coordinates.lat}
            longitude={c.coordinates.lng}
            className="group relative"
          >
            <Link
              href={`/properties/${c.id}`}
              className="relative flex size-6 cursor-pointer"
              onMouseEnter={() => setSelectedProperty(c)}
              onMouseLeave={() => setSelectedProperty(null)}
            >
              <span className="absolute z-0 inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative z-0 inline-flex size-6 rounded-full border-2 border-white bg-primary"></span>
            </Link>
          </Marker>
        ))}
        <AnimatePresence>
          {selectedProperty && (
            <Popup
              longitude={selectedProperty?.coordinates.lng}
              latitude={selectedProperty?.coordinates.lat}
              anchor="bottom"
              onClose={() => setSelectedProperty(null)}
              closeButton={false}
              className={"bg-transparent"}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                exit={{ opacity: 0, y: 10 }}
                animate={{ opacity: 100, y: 0 }}
                className="rounded-3xl bg-white/90 p-3 !text-primary shadow-[rgba(0,0,0,0.45)_0px_25px_20px_-20px] backdrop-blur-sm"
              >
                <PropertyCard isMapCard property={selectedProperty} />
              </motion.div>
            </Popup>
          )}
        </AnimatePresence>
      </Map>
    </section>
  )
}
