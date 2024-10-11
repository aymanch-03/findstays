import { cn } from "@/lib/utils"
import { format } from "date-fns"
import React from "react"
import { DateRange } from "react-day-picker"
import { Button } from "./button"
import { Calendar } from "./calendar"
import { Input } from "./input"
import { Label } from "./label"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

interface FieldProps {
  id: string
  label: string
  placeholder: string
  icon: React.ReactNode
  type?: string
  max?: number
  value?: string | number | DateRange
  onChange?: (value: any) => void
  isDateRange?: boolean
  size?: "sm" | "lg"
  classname?: string
}

export const FormField: React.FC<FieldProps> = ({
  id,
  label,
  placeholder,
  icon,
  type = "text",
  max,
  value,
  onChange,
  isDateRange = false,
  size = "sm",
  classname,
}) => {
  const labelClasses =
    size === "lg"
      ? "gap-2.5 text-lg md:text-xl"
      : "gap-1.5 text-sm md:text-base"
  const iconSize = size === "lg" ? 22 : 16
  const inputClasses =
    size === "lg"
      ? "py-4 text-lg md:py-6 md:text-xl"
      : "py-2 text-sm md:py-3 md:text-base"
  const placeholderClasses =
    size === "lg" ? "text-lg md:text-xl" : "text-sm md:text-base"

  return (
    <div
      className={cn(
        "flex flex-col transition",
        size === "lg" ? "gap-2" : "gap-1",
        classname,
      )}
    >
      <Label
        htmlFor={id}
        className={cn("flex items-center font-thin", labelClasses)}
      >
        {icon &&
          React.cloneElement(icon as React.ReactElement, {
            size: iconSize,
            strokeWidth: 1.75,
          })}
        <span>{label}</span>
      </Label>

      {!isDateRange ? (
        <Input
          id={id}
          type={type}
          max={max}
          value={value as string}
          onChange={(e) => onChange && onChange(e.target.value)}
          className={cn(
            "h-auto text-wrap border-none bg-gray-100 font-thin placeholder:text-gray-400 focus-visible:ring-0",
            inputClasses,
          )}
          placeholder={placeholder}
        />
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id={id}
              variant={"outline"}
              className={cn(
                "h-auto border-none bg-gray-100 font-thin focus-visible:ring-0 active:scale-100 lg:text-left",
                inputClasses,
                !value && "text-muted-foreground",
              )}
            >
              {value && (value as DateRange).from ? (
                value && (value as DateRange).to ? (
                  <>
                    {format((value as DateRange).from as Date, "LLL dd, y")} -{" "}
                    {format((value as DateRange).to as Date, "LLL dd, y")}
                  </>
                ) : (
                  format((value as DateRange).from as Date, "LLL dd, y")
                )
              ) : (
                <span
                  className={cn(
                    "text-left font-thin text-gray-400",
                    placeholderClasses,
                  )}
                >
                  {placeholder}
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto bg-white p-0 text-lg"
            align="center"
          >
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={(value as DateRange)?.from}
              selected={value as DateRange}
              onSelect={(date) => onChange && onChange(date)}
              numberOfMonths={2}
              disabled={{ before: new Date() }}
            />
          </PopoverContent>
        </Popover>
      )}
    </div>
  )
}
