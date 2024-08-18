"use client"
import { MapModal } from "@/components/modals/MapModal"
import { Mapbox } from "@/components/ui/mapbox"
import { ModalContext } from "@/context/ModalContext"
import { ReactNode, useState } from "react"
import { MapProvider } from "react-map-gl"

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const openModal = () => setIsModalOpen(!isModalOpen)
  return (
    <MapProvider>
      <ModalContext.Provider value={{ isModalOpen, openModal }}>
        {children}
        {isModalOpen && (
          <MapModal
            map={<Mapbox id="modalMap" isDialog={true} />}
            open={isModalOpen}
            onClose={openModal}
          />
        )}
      </ModalContext.Provider>
    </MapProvider>
  )
}
