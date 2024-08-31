import React from "react"
import { BookinRequestItem } from "./BookinRequestItem"

type Props = {}

export const BookingRequests = (props: Props) => {
  return (
    <article className="flex h-full flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl capitalize text-primary">
          Booking Requests
        </span>
        <div className="grid aspect-square size-[26px] place-content-center rounded-full bg-primary text-white">
          <span>3</span>
        </div>
      </div>
      <div className="booking-requests-list h-full max-h-[700px] overflow-x-hidden overflow-y-scroll rounded-lg border border-primary bg-white p-2 max-md:h-fit">
        {Array.from({ length: 3 }).map((item, index) => (
          <BookinRequestItem key={index} />
        ))}
      </div>
    </article>
  )
}
