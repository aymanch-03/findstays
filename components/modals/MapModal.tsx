import React, { Dispatch, SetStateAction } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog"

type Props = {
  open: boolean
  onClose: Dispatch<SetStateAction<boolean>>
  map: React.ReactNode
}

export const MapModal = ({ open, onClose, map }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="h-[90vh] w-fit max-w-fit overflow-hidden rounded-md p-0">
        <DialogTitle className="sr-only">Map</DialogTitle>
        <DialogDescription className="sr-only">Map</DialogDescription>
        {map}
      </DialogContent>
    </Dialog>
  )
}
