"use client"
import { Button } from "@/components/ui/button"
import { FormField } from "@/components/ui/form-field"
import { motion } from "framer-motion"
import { CalendarRange, MapPin, User } from "lucide-react"
import { FC, useState } from "react"
import { DateRange } from "react-day-picker"

interface SearchProprety {
  location: string
  guestCount: number
  startDate: Date
  endDate: Date
}

export const SearchPropretyForm: FC = () => {
  // const { isLoaded, loadError } = useJsApiLoader({
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  //   libraries: ["places"],
  // })

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  })
  const [location, setLocation] = useState<string>("")
  const [guests, setGuests] = useState<number>(0)

  // useEffect(() => {
  //   console.log({
  //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  //     isLoaded,
  //     loadError,
  //   })
  // }, [isLoaded, loadError])

  const searchProprety = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("Search clicked with data:", { date, guests, location })
  }
  return (
    <motion.article
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="w-full rounded-3xl bg-white p-4 backdrop-blur-sm md:p-6"
    >
      <form className="grid grid-cols-2 gap-6 lg:grid-cols-[1fr_1fr_1fr_0.75fr]">
        <FormField
          id="location"
          label="Location"
          placeholder="Type location"
          icon={<MapPin />}
          size="lg"
          value={location}
          onChange={setLocation}
        />
        <FormField
          id="guests"
          label="Guests"
          placeholder="Type guests"
          icon={<User />}
          type="number"
          size="lg"
          max={20}
          value={guests}
          onChange={(value) => setGuests(parseInt(value))}
        />
        <FormField
          id="date"
          label="Check-in - Check-out"
          placeholder="Pick a date range"
          icon={<CalendarRange />}
          isDateRange={true}
          size="lg"
          value={date}
          onChange={setDate}
        />
        <Button
          type="submit"
          onClick={searchProprety}
          variant={"default"}
          className="h-auto self-end py-4 text-xl max-lg:col-span-2 lg:py-6"
        >
          Search
        </Button>
      </form>
    </motion.article>
  )
}
