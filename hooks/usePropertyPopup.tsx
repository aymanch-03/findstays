import { PopupContext } from "@/context/PopupContext"
import { useContext } from "react"

export const usePropretyPopup = () => {
  const context = useContext(PopupContext)
  if (!context) {
    throw new Error(
      "usePropretyPopup must be used within a PropretyPopupProvider",
    )
  }
  return context
}
