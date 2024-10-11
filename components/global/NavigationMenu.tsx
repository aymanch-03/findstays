"use client"

import Link from "next/link"
import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Building2, LandPlot, User } from "lucide-react"

const components: { title: string; href: string }[] = [
  {
    title: "Privacy Policy",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Support",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Contact",
    href: "/docs/primitives/progress",
  },
]

export function NavMenu({ textColor }: { textColor: string }) {
  return (
    <NavigationMenu className="hidden justify-self-center md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              textColor,
              textColor === "text-white" && "hover:text-white",
            )}
          >
            Discover
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] grid-cols-1 gap-3 p-3">
              <ListItem
                href="/properties"
                title="Properties"
                icon={<LandPlot className="size-5 text-primary" />}
              >
                Discover our range of rental properties and find your next home.
              </ListItem>
              <ListItem
                href="/host"
                title="Host Mode"
                icon={<User className="size-6 pt-0.5 text-primary" />}
              >
                Start listing your property and earn with ease.
              </ListItem>
              <ListItem
                href="#"
                title="About Us"
                icon={<Building2 className="size-5 text-primary" />}
              >
                Learn more about Rentlify as a company.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              textColor === "text-white" && "hover:text-white",
              textColor,
            )}
          >
            More
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              textColor === "text-white" && "hover:text-white",
              textColor,
            )}
          >
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  className?: string
  icon?: React.ReactNode
  title: string
  children: React.ReactNode
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, icon, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "flex select-none items-start gap-2.5 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            {icon && <>{icon}</>}
            <div className="flex-1 space-y-1">
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
