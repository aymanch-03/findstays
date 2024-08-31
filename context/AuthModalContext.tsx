import { createContext } from "react"

export interface AuthModalContext {
  isAuthModalOpen: boolean
  openAuthModal: () => void
}

export const AuthModalContext = createContext<AuthModalContext | undefined>(
  undefined,
)
