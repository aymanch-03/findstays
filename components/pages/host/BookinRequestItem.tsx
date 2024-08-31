import Image from "next/image"
import React from "react"

export const BookinRequestItem = () => {
  return (
    <div className="flex items-center justify-between gap-6 p-3">
      <Image
        className="aspect-square size-16 rounded-sm"
        src={"/images/home_bg.jpg"}
        alt="Oasis"
        width={100}
        height={100}
      />
      <span className="flex-1 truncate text-left text-base">
        Oasis Sands Resort Homestay
      </span>
      <span>15/09 - 19/09</span>
      <span>4 days</span>
      <span>2,300 MAD</span>
    </div>
  )
}
