import { User } from ".prisma/client"
import {
  BookHeart,
  LandPlot,
  LogOut,
  Repeat,
  Settings,
  User as UserIcon,
} from "lucide-react"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

type Props = {
  authUser: User | null
}

export const UserCenter = ({ authUser }: Props) => {
  const nameInitials = authUser?.name
    ? authUser.name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase())
        .join("")
    : ""
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"secondaryRingHover"}
          className="relative aspect-square size-[38px] justify-self-end rounded-full p-0 outline-none"
        >
          <Avatar className="size-[38px]">
            {authUser?.image && (
              <AvatarImage src={authUser.image} alt="@shadcn" />
            )}
            <AvatarFallback className="text-sm uppercase">
              {nameInitials}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60" align="end" forceMount>
        <DropdownMenuGroup className="space-y-1.5">
          <DropdownMenuItem className="gap-2 text-[15px]">
            <UserIcon className="size-[18px] text-primary" />
            Profile
            <span className="text-sm font-thin text-gray-400">
              @{authUser?.name?.toLowerCase()}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 text-[15px]">
            <LandPlot className="size-[18px] text-primary" />
            My Propreties
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 text-[15px]">
            <BookHeart className="size-[18px] text-primary" />
            My Favorites
          </DropdownMenuItem>
          <DropdownMenuItem className="" asChild>
            <Link
              href={"/host"}
              className="flex items-center gap-2 !text-[15px]"
            >
              <Repeat className="size-[18px] text-primary" />
              Host Mode
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 text-[15px]">
            <Settings className="size-[18px] text-primary" />
            Account settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => signOut()}
          className="gap-2 text-[15px]"
        >
          <LogOut className="size-[18px] text-primary/70" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
