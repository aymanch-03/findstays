"use client"
import { PropertiesList } from "@/components/pages/properties/PropertiesList"
import { PropretiesMap } from "@/components/pages/properties/PropertiesMap"
import { SearchProperties } from "@/components/pages/properties/SearchProperties"
import { Skeleton } from "@/components/ui/skeleton"
import { wait } from "@/lib/utils"
import { useEffect, useState } from "react"
import { MapProvider } from "react-map-gl"

const Properties = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchMap = async () => {
      await wait(2000)
      setIsLoading(false)
    }
    fetchMap()
  }, [setIsLoading])
  return (
    <section className="relative py-[70px]">
      <SearchProperties />
      <main className="container relative flex flex-col gap-6 py-5 lg:flex-row">
        <section className="min-h-[800px] w-full max-md:order-2">
          <div className="flex flex-col gap-0.5 pb-5">
            <h1 className="text-lg">
              Hotels in <span className="font-medium">Casablanca, Morocco</span>
            </h1>
            <p className="font-thin text-primary/50">
              We found <span className="text-primary">234</span> Hotels
            </p>
          </div>
          <PropertiesList />
        </section>
        {isLoading ? (
          <Skeleton className="h-[500px] overflow-hidden rounded-lg lg:h-[1000px] lg:basis-[43%]" />
        ) : (
          <PropretiesMap />
        )}
      </main>
    </section>
  )
}

export default Properties
