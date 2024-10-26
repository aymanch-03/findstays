import { authOptions } from "@/lib/config/auth"
import prisma from "@/lib/prismadb"
import { getServerSession } from "next-auth"

export async function getSession() {
  return await getServerSession(authOptions)
}

export async function useAuthUser() {
  try {
    const session = await getSession()
    if (!session?.user?.email) {
      return null
    }
    const authUser = await prisma.user.findUnique({
      where: { email: session.user.email },
    })
    if (!authUser) {
      return null
    }
    return authUser
  } catch (error: any) {
    return null
  }
}
