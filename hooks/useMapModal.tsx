import { ModalContext, ModalContextType } from "@/context/ModalContext"
import { useContext } from "react"

export const useMapModal = (): ModalContextType => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("useMapModal must be used within a ModalProvider")
  }
  return context
}
