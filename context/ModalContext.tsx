import { createContext } from "react"

export interface ModalContextType {
  isModalOpen: boolean
  openModal: () => void
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
)
