"use client"
import { DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import { Modal, ModalContent, ModalTrigger } from "../../ui/modal"
import { SignInModalBody } from "./body"

type PropsWithChildren = {
  children: React.ReactNode
  isNewUser: boolean
  setIsNewUser: (value: boolean) => void
}

export const SignIn = ({
  children,
  isNewUser,
  setIsNewUser,
}: PropsWithChildren) => {
  const [open, setOpen] = useState(false)
  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger asChild>{children}</ModalTrigger>
      <ModalContent className="px-3 py-1 md:px-7">
        <DialogTitle className="hidden"></DialogTitle>
        <DialogDescription className="hidden"></DialogDescription>
        <SignInModalBody
          closeModal={() => setOpen(false)}
          isNewUser={isNewUser}
          setIsNewUser={setIsNewUser}
        />
      </ModalContent>
    </Modal>
  )
}
