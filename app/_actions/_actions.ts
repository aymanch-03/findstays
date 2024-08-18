"use server"
import { User } from ".prisma/client"
import prisma from "@/lib/prismadb"
import { FormDataRegisterSchema, RegisterInputs } from "@/lib/schema"
import bcrypt from "bcrypt"

export async function registerUser(
  data: RegisterInputs,
): Promise<{ user: User } | { error: string }> {
  const result = FormDataRegisterSchema.safeParse(data)
  if (!result.success) {
    return { error: "Validation Failed" }
  }

  const { name, password, email } = result.data

  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) {
    return { error: "User with this email already exists" }
  }

  const hashedPassword = await bcrypt.hash(password, 12)

  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  })

  return { user }
}
