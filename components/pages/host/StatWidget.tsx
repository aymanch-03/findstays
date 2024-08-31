import React from "react"

export interface IStatWidget {
  title: string
  value: string
  Icon: React.ElementType
  index: number
}

export const StatWidget = ({ title, value, Icon, index }: IStatWidget) => {
  return (
    <div className="relative flex h-32 flex-col justify-between rounded-lg border border-primary bg-white p-5">
      <Icon
        className="absolute right-5 top-5 size-7 text-muted-foreground"
        strokeWidth={1}
        fill="rgba(0,0,0,0.1)"
      />
      <span className="text-lg capitalize text-muted-foreground">{title}</span>
      <span className="text-3xl text-primary">
        {value}
        {index === 2 && (
          <span className="text-base text-muted-foreground">,68</span>
        )}
      </span>
    </div>
  )
}
