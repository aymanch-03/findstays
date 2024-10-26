import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { useSearchAddress } from "@/hooks/useSearchAddress"
import { cn } from "@/lib/utils"
import { CommandLoading } from "cmdk"
import { format } from "date-fns"
import { Check, ChevronsUpDown } from "lucide-react"
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
  min?: number
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
  min,
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

  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")

  const {
    query,
    results,
    loading,
    handleSearch,
    selectedItem,
    setSelectedItem,
  } = useSearchAddress()

  return (
    <div
      className={cn(
        "flex flex-col transition",
        size === "lg" ? "gap-2" : "gap-1",
        id === "date" && "max-lg:col-span-2",
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

      {id === "location" ? (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className={cn(
                "h-full w-full justify-between truncate border-none bg-gray-100 font-normal",
                inputClasses,
              )}
            >
              <p className="truncate">
                {selectedItem
                  ? `${selectedItem.label} (${selectedItem.raw.entityType})`
                  : "Select place..."}
              </p>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0">
            <Command>
              <CommandInput
                placeholder="Search the place..."
                onValueChange={(value: string) => handleSearch(value)}
                className="w-full py-4 md:text-base"
              />
              <CommandList>
                {loading ? (
                  <CommandLoading>
                    <CommandEmpty>Type to search</CommandEmpty>
                  </CommandLoading>
                ) : Object.keys(results).length > 0 ? (
                  Object.entries(results).map(([type, items]) => (
                    <CommandGroup
                      key={type}
                      heading={type.charAt(0).toUpperCase() + type.slice(1)}
                    >
                      {items.map((item, index) => (
                        <CommandItem
                          key={index}
                          value={item.label}
                          onSelect={(currentValue: string) => {
                            const item = results[type]?.find(
                              (item) => item.label === currentValue,
                            )
                            setInputValue(
                              currentValue === inputValue ? "" : currentValue,
                            )
                            setSelectedItem(item ?? null)
                            onChange && onChange(item ?? null)
                            setOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              inputValue === item.label
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                          {item.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ))
                ) : (
                  <CommandEmpty>No results found.</CommandEmpty>
                )}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      ) : !isDateRange ? (
        <Input
          id={id}
          type={type}
          max={max}
          min={min || undefined}
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
