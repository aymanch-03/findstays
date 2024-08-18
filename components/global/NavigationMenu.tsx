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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
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
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                    href="/about-us"
                  >
                    <LandPlot className="h-6 w-6" color="white" />
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Rentlify
                    </div>
                    <p className="text-sm leading-tight text-muted">
                      Effortlessly find and manage property reservations with
                      Rentlify.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/properties"
                title="Properties"
                icon={<LandPlot className="size-5 text-primary" />}
              >
                Discover our range of rental properties and find your next home.
              </ListItem>
              <ListItem
                href="/docs"
                title="Host Mode"
                icon={<User className="size-6 pt-0.5 text-primary" />}
              >
                Start listing your property and earn with ease.
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="About Us"
                icon={<Building2 className="size-5 text-primary" />}
              >
                Learn more about Rentlify as a company.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              textColor === "text-white" && "hover:text-white",
              textColor,
            )}
          >
            More
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                textColor === "text-white" && "hover:text-white",
                textColor,
              )}
            >
              About Us
            </NavigationMenuLink>
          </Link>
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
