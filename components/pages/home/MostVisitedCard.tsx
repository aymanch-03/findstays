import { StarsReview } from "@/components/ui/stars-review"
import { cn } from "@/lib/utils"
import { StarFilledIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import { ArrowRightIcon } from "lucide-react"
import { FC } from "react"

type CardProps = {
  index: number
  title: string
  location: string
  imageUrl: string
  visitors: number
  classname?: string
  grid?: boolean
}

export const MostVisitedCard: FC<CardProps> = ({
  index,
  title,
  location,
  imageUrl,
  visitors,
  classname,
  grid = true,
}) => {
  const isPrimary = index === 0 && grid
  const titleSize = isPrimary
    ? "text-3xl md:text-4xl lg:text-5xl"
    : "text-xl md:text-2xl"
  const gapSize = isPrimary ? "gap-3 md:gap-6" : "gap-2 md:gap-4"

  return (
    <motion.div
      whileHover={{ scale: 0.98, rotate: 0.3 }}
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={cn(
        "group relative row-span-1 flex size-full cursor-pointer flex-col justify-end overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat p-5 text-white max-md:h-[300px]",
        isPrimary &&
          "col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-1",
        classname,
      )}
    >
      <div className="absolute inset-0 -z-0 h-[130%] w-full bg-gradient-to-t from-black/80 to-transparent transition-all duration-500 group-hover:h-full" />
      <article className="relative z-0 flex items-end">
        <div className={`flex flex-1 flex-col ${gapSize}`}>
          <h1 className={`font-semibold ${titleSize} max-md:text-3xl`}>
            {title}
          </h1>
          <div className="flex flex-col gap-2">
            <span className="text-lg capitalize">{location}</span>
            <div className="flex items-center gap-2">
              <StarsReview rating={4} />
              <span className="text-lg font-thin">({visitors} Visitors)</span>
            </div>
          </div>
        </div>
        <ArrowRightIcon
          className="transition-all duration-300 group-hover:translate-x-2"
          color="white"
          width={40}
          height={40}
        />
      </article>
    </motion.div>
  )
}
