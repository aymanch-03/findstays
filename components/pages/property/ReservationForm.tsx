import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { PropertyType } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarRange, Minus, Plus, User } from "lucide-react"
import { useState } from "react"
import { DateRange } from "react-day-picker"

type ReservationFormProps = {
  property: PropertyType
}

const ReservationForm = ({ property }: ReservationFormProps) => {
  const [date, setDate] = useState<DateRange | undefined>(undefined)
  const [count, setCount] = useState<number>(0)
  const incrementGuestCount = () => {
    setCount(count + 1)
  }
  const decrementGuestCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <div className="top-10 mx-auto flex w-full flex-col gap-2.5 overflow-hidden rounded-xl bg-primary/[0.04] p-2.5 max-lg:-order-1 max-lg:max-w-[500px] md:basis-[40%] md:rounded-2xl lg:sticky">
      <section className="flex flex-1 flex-col gap-5 rounded-xl bg-white px-3 py-4">
        <div className="flex flex-col gap-1 transition">
          <Label
            htmlFor={"guests"}
            className="flex items-center gap-2 text-base font-normal text-primary/60"
          >
            <User size={20} />
            Guests
          </Label>
          <div className="flex h-auto text-wrap rounded-full border bg-white p-3 text-base font-thin placeholder:text-gray-400 focus-visible:ring-0">
            <p className="flex-1">{count} Guests</p>
            <div className="flex gap-2">
              <Button
                size={"icon"}
                onClick={decrementGuestCount}
                variant={"secondaryRingHover"}
                className="size-6 rounded-full p-1"
              >
                <Minus />
              </Button>
              <Button
                size={"icon"}
                onClick={incrementGuestCount}
                className="size-6 rounded-full p-1"
              >
                <Plus />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 transition">
          <Label
            htmlFor={"date"}
            className="flex items-center gap-2 text-base font-normal text-primary/60"
          >
            <CalendarRange size={20} />
            Check-in - Check-out
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "h-auto w-full rounded-full border bg-white p-3 !text-left text-base font-thin focus-visible:ring-0 active:scale-100",
                  !date && "text-muted-foreground",
                )}
              >
                {date && date?.from ? (
                  date && date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span className="text-left font-thin text-gray-400">
                    Pick a date range
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto bg-white p-0 text-lg"
              align="center"
            >
              <Calendar
                mode="range"
                defaultMonth={date?.from ?? new Date()}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
                disabled={(day) => day < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </section>
      <section className="flex items-center justify-between rounded-xl bg-white px-3 py-4">
        <p className="text-base font-medium capitalize">Pricing per night</p>
        <p className="text-base">
          <span className="text-[17px]">{property.price.toLocaleString()}</span>{" "}
          MAD
        </p>
      </section>
      <section className="flex items-center justify-between rounded-xl bg-white px-3 py-4">
        <p className="text-base font-medium capitalize">Total Pricing</p>
        <p className="text-base">
          <span className="text-[17px]">
            {(property.price * 3).toLocaleString()}
          </span>{" "}
          MAD
        </p>
      </section>
      <Button size={"lg"} className="rounded-full text-base">
        Reserve
      </Button>
    </div>
  )
}

export default ReservationForm
