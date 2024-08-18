import { StarFilledIcon } from "@radix-ui/react-icons"
import React from "react"

export const StarsReview = ({
  rating,
  mode = "light",
}: {
  rating: number
  mode?: "light" | "dark"
}) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, idx) => (
        <StarFilledIcon
          width={20}
          height={20}
          key={idx}
          color={
            idx < rating
              ? "#ffa534"
              : mode === "light"
                ? "rgba(255, 255, 255, 0.65)"
                : "rgba(0, 0, 0, 0.15)"
          }
        />
      ))}
    </div>
  )
}
