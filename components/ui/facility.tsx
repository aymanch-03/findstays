import React from "react"

type Props = {
  title: string
  icon: React.ReactNode
}

export const FacilityBadge = ({ title, icon }: Props) => {
  return (
    <div className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gray-100 px-5 py-4 *:text-black">
      {icon &&
        React.cloneElement(icon as React.ReactElement, {
          strokeWidth: 2.2,
        })}
      <span className="text-base capitalize md:text-lg lg:text-xl">
        {title}
      </span>
    </div>
  )
}
