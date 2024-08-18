"use client"

import * as React from "react"

import { useMediaQuery } from "@/components/hooks/useMediaQuery"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"

interface BaseProps {
  children: React.ReactNode
}

interface RootModalProps extends BaseProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

interface ModalProps extends BaseProps {
  className?: string
  asChild?: true
}

const desktop = "(min-width: 768px)"

const Modal = ({ children, ...props }: RootModalProps) => {
  const isDesktop = useMediaQuery(desktop)
  const Modal = isDesktop ? Dialog : Drawer

  return <Modal {...props}>{children}</Modal>
}

const ModalTrigger = ({ className, children, ...props }: ModalProps) => {
  const isDesktop = useMediaQuery(desktop)
  const ModalTrigger = isDesktop ? DialogTrigger : DrawerTrigger

  return (
    <ModalTrigger className={className} {...props}>
      {children}
    </ModalTrigger>
  )
}

const ModalClose = ({ className, children, ...props }: ModalProps) => {
  const isDesktop = useMediaQuery(desktop)
  const ModalClose = isDesktop ? DialogClose : DrawerClose

  return (
    <ModalClose className={className} {...props}>
      {children}
    </ModalClose>
  )
}

const ModalContent = ({ className, children, ...props }: ModalProps) => {
  const isDesktop = useMediaQuery(desktop)
  const ModalContent = isDesktop ? DialogContent : DrawerContent

  return (
    <ModalContent className={className} {...props}>
      {children}
    </ModalContent>
  )
}

const ModalDescription = ({ className, children, ...props }: ModalProps) => {
  const isDesktop = useMediaQuery(desktop)
  const ModalDescription = isDesktop ? DialogDescription : DrawerDescription

  return (
    <ModalDescription className={className} {...props}>
      {children}
    </ModalDescription>
  )
}

const ModalHeader = ({ className, children, ...props }: ModalProps) => {
  const isDesktop = useMediaQuery(desktop)
  const ModalHeader = isDesktop ? DialogHeader : DrawerHeader

  return (
    <ModalHeader className={className} {...props}>
      {children}
    </ModalHeader>
  )
}

const ModalTitle = ({ className, children, ...props }: ModalProps) => {
  const isDesktop = useMediaQuery(desktop)
  const ModalTitle = isDesktop ? DialogTitle : DrawerTitle

  return (
    <ModalTitle className={className} {...props}>
      {children}
    </ModalTitle>
  )
}

const ModalBody = ({ className, children, ...props }: ModalProps) => {
  return (
    <div className={cn("px-4 md:px-0", className)} {...props}>
      {children}
    </div>
  )
}

const ModalFooter = ({ className, children, ...props }: ModalProps) => {
  const isDesktop = useMediaQuery(desktop)
  const ModalFooter = isDesktop ? DialogFooter : DrawerFooter

  return (
    <ModalFooter className={className} {...props}>
      {children}
    </ModalFooter>
  )
}

export {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
}
