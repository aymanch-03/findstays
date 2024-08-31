import { AuthModalContext } from "@/context/AuthModalContext"
import { useContext } from "react"

export const useAuthModal = (): AuthModalContext => {
  const context = useContext(AuthModalContext)
  if (!context) {
    throw new Error("useAuthModal must be used within a AuthModalProvider")
  }
  return context
}
