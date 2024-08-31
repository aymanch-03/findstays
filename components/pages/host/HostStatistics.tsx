import { Coins, DoorOpen, KeyRound, Star } from "lucide-react"
import React from "react"
import { IStatWidget, StatWidget } from "./StatWidget"

export const HostStatistics = () => {
  return (
    <article className="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {[
        { title: "check'ins", value: "12", Icon: KeyRound },
        { title: "check'outs", value: "32", Icon: DoorOpen },
        { title: "earnings", value: "$4.355", Icon: Coins },
        { title: "reviews", value: "4.5", Icon: Star },
      ].map((s, idx) => (
        <StatWidget index={idx} {...s} />
      ))}
    </article>
  )
}
