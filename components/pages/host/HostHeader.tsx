import { Button } from "@/components/ui/button"
import { User } from "@prisma/client"
import { HousePlus } from "lucide-react"
import Image from "next/image"

type Props = {
  authUser: User | null
}

export const HostHeader = async ({ authUser }: Props) => {
  return (
    <section className="border-t border-y-black/5 pt-10">
      <main className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative size-[55px] overflow-hidden rounded-full">
            <Image
              src={authUser?.image ?? ""}
              alt={authUser?.name ?? ""}
              className="absolute inset-0"
              fill
            />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <h1 className="text-lg font-medium capitalize md:text-xl lg:text-2xl">
              Welcome {authUser?.name?.split(" ")[0]}!
            </h1>
            <span className="text-sm text-primary/50 md:text-base">
              Here's an overview of your listings
            </span>
          </div>
        </div>
        <div>
          <Button className="gap-2 rounded-full">
            <HousePlus className="size-5" />
            Create Listing
          </Button>
        </div>
      </main>
    </section>
  )
}
