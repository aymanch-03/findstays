"use client"
import { SignIn } from "@/components/modals/signIn"
import { AuthModalContext } from "@/context/AuthModalContext"
import { useSearchParams } from "next/navigation"
import { ReactNode, useMemo, useState } from "react"

export const AuthModalProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthModalOpen, setIsModalOpen] = useState<boolean>(false)
  const openAuthModal = () => setIsModalOpen(!isAuthModalOpen)
  const searchParams = useSearchParams()
  const tab = useMemo(
    () => searchParams.get("tab") as "login" | "register",
    [searchParams],
  )

  return (
    <AuthModalContext.Provider value={{ isAuthModalOpen, openAuthModal }}>
      {children}
      {isAuthModalOpen && (
        <SignIn open={isAuthModalOpen} setOpen={setIsModalOpen} tab={tab} />
      )}
    </AuthModalContext.Provider>
  )
}
