import { registerUser } from "@/app/_actions/_actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormDataRegisterSchema, RegisterInputs } from "@/lib/schema"
import { wait } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@radix-ui/react-label"
import { LoaderCircle } from "lucide-react"
import { SubmitHandler, useForm } from "react-hook-form"
import { FormProps } from "./types"

export const RegisterForm = ({
  setAuthError,
  setIsUserNew,
  closeModal,
  setIsLoading,
  isLoading,
}: FormProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: zodResolver(FormDataRegisterSchema),
  })

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    setIsLoading(true)
    try {
      const result = await registerUser(data)
      if ("error" in result) {
        setAuthError(result.error)
        return
      }
      await wait(900)

      reset()
      setIsUserNew(false)
    } catch (error) {
      setAuthError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <form method="POST" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid w-full items-center gap-0.5 font-light">
        <Label htmlFor="email">Name</Label>
        <Input
          disabled={isLoading}
          {...register("name")}
          className="h-11 text-base placeholder:text-black/40"
          type="name"
          name="name"
          placeholder="Enter Your Name..."
        />
        {errors.name?.message && (
          <span className="text-left text-sm text-red-400">
            {errors.name?.message as string}
          </span>
        )}
      </div>
      <div className="grid w-full items-center gap-0.5 font-light">
        <Label htmlFor="email">Email Address</Label>
        <Input
          disabled={isLoading}
          {...register("email")}
          className="h-11 text-base placeholder:text-black/40"
          type="email"
          name="email"
          placeholder="Enter Your Email..."
        />
        {errors.email?.message && (
          <span className="text-left text-sm text-red-400">
            {errors.email?.message as string}
          </span>
        )}
      </div>
      <div className="grid w-full items-center gap-0.5 font-light">
        <Label htmlFor="email">Password</Label>
        <Input
          disabled={isLoading}
          {...register("password")}
          className="h-11 text-base placeholder:text-black/40"
          type="password"
          name="password"
          placeholder="Enter Your Password..."
        />
        {errors.password?.message && (
          <span className="text-left text-sm text-red-400">
            {errors.password?.message as string}
          </span>
        )}
      </div>
      <Button
        disabled={isLoading}
        type="submit"
        className="w-full gap-2 text-base font-light"
        size={"lg"}
      >
        {isLoading && <LoaderCircle className="size-5 animate-spin" />}
        Register
      </Button>
      <div className="text-center">
        <span className="font-light text-gray-500">
          Already have an account?
        </span>{" "}
        <span
          className="cursor-pointer font-normal hover:underline"
          onClick={() => setIsUserNew(false)}
        >
          Sign In
        </span>
      </div>
    </form>
  )
}
