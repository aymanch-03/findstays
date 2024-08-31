import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormDataLoginSchema, LoginInputs } from "@/lib/schema"
import { wait } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@radix-ui/react-label"
import { LoaderCircle } from "lucide-react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { FormProps } from "./types"

export const LoginForm = ({
  setAuthError,
  closeModal,
  isLoading,
  setIsLoading,
}: FormProps) => {
  const router = useRouter()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(FormDataLoginSchema),
  })

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    setIsLoading(true)
    try {
      const response = await signIn("credentials", { ...data, redirect: false })
      await wait(900)
      if (response?.ok) {
        reset()
        closeModal()
        router.refresh()
        return
      } else {
        setAuthError("An error occurred. Please try again.")
      }
    } catch (error) {
      setAuthError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
        <Button
          disabled={isLoading}
          variant={"link"}
          className="ml-auto size-fit w-full justify-end px-0 py-1"
        >
          Forgot Password?
        </Button>
      </div>
      <Button
        disabled={isLoading}
        type="submit"
        className="w-full gap-2 text-base font-light"
        size={"lg"}
      >
        {isLoading && <LoaderCircle className="size-5 animate-spin" />}
        Sign In
      </Button>
      <div className="text-center">
        <span className="font-light text-gray-500">
          {"Don't"}have an account yet?
        </span>{" "}
        <span
          className="cursor-pointer font-normal hover:underline"
          onClick={() => router.push("?tab=register")}
        >
          Register
        </span>
      </div>
    </form>
  )
}
