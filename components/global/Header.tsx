"use client"
import { useAuthModal } from "@/hooks/useAuthModal"
import useUpdateQueryParams from "@/lib/urlModifier"
import { cn } from "@/lib/utils"
import { User } from "@prisma/client"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import { NavMenu } from "./NavigationMenu"
import { UserCenter } from "./UserCenter"

type Props = {
  authUser: User | null
}

export const Header = ({ authUser }: Props) => {
  const pathname = usePathname()
  const updateURL = useUpdateQueryParams()
  const { openAuthModal } = useAuthModal()
  const getHeaderStyle = () => {
    if (pathname === "/") {
      return "text-white"
    } else {
      return "text-primary"
    }
  }

  return (
    <header className="font-heading absolute top-0 z-50 flex h-[70px] w-full items-center justify-center bg-transparent transition-all">
      <main className="container grid w-full grid-cols-2 text-white md:grid-cols-3">
        <h1 className={cn("self-center font-semibold", getHeaderStyle())}>
          LOGO.
        </h1>
        <NavMenu textColor={getHeaderStyle()} />
        {authUser ? (
          <UserCenter authUser={authUser} />
        ) : (
          <div className="flex items-center gap-4 justify-self-end">
            <Button
              onClick={() => {
                updateURL({ tab: "login" })
                openAuthModal()
              }}
              variant={"secondaryRingHover"}
              className="rounded-full font-light"
            >
              Sign in
            </Button>
            <Button
              onClick={() => {
                updateURL({ tab: "register" })
                openAuthModal()
              }}
              className="rounded-full font-light"
            >
              Register
            </Button>
          </div>
        )}
      </main>
    </header>
  )
}
