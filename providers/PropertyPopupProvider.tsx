"use client"
import { PopupContext } from "@/context/PopupContext"
import { PropertyType } from "@/lib/constants"
import { ReactNode, useState } from "react"

export const PropertyPopupProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [selectedProperty, setSelectedProperty] = useState<PropertyType | null>(
    null,
  )

  return (
    <PopupContext.Provider value={{ selectedProperty, setSelectedProperty }}>
      {children}
    </PopupContext.Provider>
  )
}
