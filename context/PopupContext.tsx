import { PropertyType } from "@/lib/constants"
import { createContext } from "react"

interface PopupContextType {
  selectedProperty: PropertyType | null
  setSelectedProperty: (proprety: PropertyType | null) => void
}

export const PopupContext = createContext<PopupContextType | undefined>(
  undefined,
)
