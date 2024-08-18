import { ImageGalleryModal } from "@/components/modals/ImageGalleryModal"
import { Button } from "@/components/ui/button"
import { PropertyType } from "@/lib/constants"
import { Expand } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

type Props = {
  property: PropertyType
  images: string[]
}

export const PropertyImageGallery = ({ property, images }: Props) => {
  const [openGallery, setOpenGallery] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const handleModalOpen = (index: number) => {
    setOpenGallery(true)
    setSelectedIndex(index + 1)
  }
  return (
    <div className="flex w-full flex-col gap-4">
      <div
        className="group relative min-h-[400px] flex-1 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat md:min-h-[600px] md:rounded-2xl"
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <Button
          className={`absolute -right-[50px] bottom-4 z-20 flex h-fit items-center justify-center gap-2 p-2 group-hover:right-4`}
          onClick={() => handleModalOpen(-1)}
        >
          <Expand size={18} />
        </Button>
      </div>
      <div className="hidden w-full grid-cols-2 gap-4 md:grid md:grid-cols-4">
        {images.slice(1, 5).map((image, index) => (
          <div
            key={index}
            onClick={() => handleModalOpen(index)}
            className="group relative aspect-[3/2] transform cursor-pointer overflow-hidden rounded bg-cover bg-center bg-no-repeat transition-all md:rounded-xl lg:rounded-2xl"
          >
            <Image
              src={image}
              alt={property.title}
              fill
              className="object-cover transition-all group-hover:scale-105"
            />
            <div className="absolute inset-0 grid size-full place-content-center bg-primary/50 opacity-0 transition-all group-hover:opacity-100">
              <Expand className="text-white" />
            </div>
          </div>
        ))}
      </div>
      <ImageGalleryModal
        selectedIndex={selectedIndex}
        property={property}
        images={images}
        openGallery={openGallery}
        onCloseGallery={() => {
          setOpenGallery(false)
        }}
      />
    </div>
  )
}
