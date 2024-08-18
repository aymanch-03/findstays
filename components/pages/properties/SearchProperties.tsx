"use client"
import { FormField } from "@/components/ui/form-field"

import { CalendarRange, MapPin, User } from "lucide-react"
import { useState } from "react"
import { DateRange } from "react-day-picker"

export const SearchProperties = () => {
  const [date, setDate] = useState<DateRange | undefined>(undefined)
  const [location, setLocation] = useState<string>("")
  const [guests, setGuests] = useState<number>(0)
  return (
    <section className="z-10 gap-10 border-y border-y-black/5 bg-white py-4">
      <div className="container">
        <form className="grid grid-cols-2 gap-6 max-md:container md:w-[700px] md:grid-cols-[1fr_1fr_1fr]">
          <FormField
            id="location"
            label="Location"
            placeholder="Type location"
            icon={<MapPin />}
            size="sm"
            value={location}
            onChange={setLocation}
          />
          <FormField
            id="guests"
            label="Guests"
            placeholder="Type guests"
            icon={<User />}
            type="number"
            size="sm"
            max={20}
            value={guests}
            onChange={(value) => setGuests(parseInt(value))}
          />
          <FormField
            classname="max-md:col-span-2"
            id="date"
            label="Check-in - Check-out"
            placeholder="Pick a date range"
            icon={<CalendarRange />}
            isDateRange={true}
            size="sm"
            value={date}
            onChange={setDate}
          />
        </form>
      </div>
    </section>
  )
}
