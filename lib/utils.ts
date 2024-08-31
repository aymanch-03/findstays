import { User } from "@prisma/client"
import { clsx, type ClassValue } from "clsx"
import { redirect } from "next/navigation"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const requireAuth = async (authUser: User | null) => {
  if (!authUser) {
    redirect("/?auth=false&tab=login")
  }
}
