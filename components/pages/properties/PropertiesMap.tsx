import { Mapbox } from "@/components/ui/mapbox"

export const PropretiesMap = () => {
  return (
    <section className="top-0 h-[500px] overflow-hidden rounded-lg lg:sticky lg:h-[1000px] lg:basis-[43%]">
      <Mapbox id="mainMap" classname="w-full" />
    </section>
  )
}
