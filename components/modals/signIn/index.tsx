"use client"
import { DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Modal, ModalContent } from "../../ui/modal"
import { SignInModalBody } from "./body"

type PropsWithChildren = {
  tab: "login" | "register"
  open: boolean
  setOpen: (v: boolean) => void
}

export const SignIn = ({ tab, open, setOpen }: PropsWithChildren) => {
  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalContent className="px-3 py-1 md:px-7">
        <DialogTitle className="hidden"></DialogTitle>
        <DialogDescription className="hidden"></DialogDescription>
        <SignInModalBody tab={tab} closeModal={() => setOpen(false)} />
      </ModalContent>
    </Modal>
  )
}
