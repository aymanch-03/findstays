import { cn } from "@/lib/utils"
import React, { FC } from "react"

type TextEffectProps = {
  label: string
  position?: "left" | "right"
}

export const TextEffect: FC<TextEffectProps> = ({
  label,
  position = "left",
}) => {
  return (
    <span
      className={cn(
        "absolute -top-10 -z-50 select-none text-[180px] font-extrabold leading-[1] text-black/[0.03] md:text-[250px] lg:text-[400px]",
        position === "left" ? "-left-[28%]" : "-right-[28%]",
      )}
    >
      {label}
    </span>
  )
}
