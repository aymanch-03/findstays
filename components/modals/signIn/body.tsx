"use client"
import { Button } from "@/components/ui/button"
import { wait } from "@/lib/utils"
import Google from "@/public/icons/google-icon.svg"
import { Separator } from "@radix-ui/react-separator"
import { LoaderCircle } from "lucide-react"
import { signIn } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { LoginForm } from "./login"
import { RegisterForm } from "./register"

type Props = {
  closeModal: () => void
  tab: "login" | "register"
}

export const SignInModalBody = ({ closeModal, tab }: Props) => {
  const [authError, setAuthError] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const isLogin = tab === "login"
  const handleSocialAuth = async () => {
    setIsLoading(true)
    try {
      await wait(900)
      const response = await signIn("google", {
        redirect: false,
      })
      if (response?.ok) {
        closeModal()
        return
      } else {
        setAuthError(response?.error as string)
      }
    } catch (error) {
      setAuthError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex flex-col items-center gap-2 rounded-lg">
      <div className="relative mx-auto w-[80%]">
        <div className="my-6 flex flex-col items-center justify-center gap-4 text-xl font-semibold">
          <h1>LOGO.</h1>
          <div className="flex flex-col items-center gap-1">
            <span className="text-lg font-light capitalize md:text-xl">
              Welcome Back
            </span>
            <span className="font-text text-sm font-thin capitalize text-gray-500 md:text-base">
              Please enter your details to {isLogin ? "Register" : "Sign In"}
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="bg-[linear-g radient(to_top,rgba(255,255,255,0.4),rgba(255,255,255,0))] absolute bottom-0 left-0 right-0 -z-10 h-[20%] opacity-30"></div>
        <div className="absolute bottom-0 left-0 top-0 -z-10 w-[20%] bg-[linear-gradient(to_right,rgba(255,255,255,0.4),rgba(255,255,255,0))] opacity-30"></div>
        <div className="absolute bottom-0 right-0 top-0 -z-10 w-[20%] bg-[linear-gradient(to_left,rgba(255,255,255,0.4),rgba(255,255,255,0))] opacity-30"></div>
      </div>
      <div className="flex w-full flex-col gap-[10px] pb-6">
        <Button
          onClick={handleSocialAuth}
          disabled={isLoading}
          variant={"secondaryRingHover"}
          size={"lg"}
          className="gap-2 text-base capitalize"
        >
          {isLoading ? (
            <LoaderCircle className="size-5 animate-spin" />
          ) : (
            <Image src={Google} alt="Google" width={24} />
          )}
          {isLogin ? "Register" : "Sign In"} using Google
        </Button>
        <Separator className="relative my-4 h-[0.5px] bg-black/10 before:absolute before:left-1/2 before:top-1/2 before:mx-auto before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:px-3 before:text-center before:text-sm before:text-black before:content-['Or']" />
        {authError && (
          <div className="rounded-md bg-red-100 p-2.5 text-center text-sm">
            <span className="text-red-600">{authError}</span>
          </div>
        )}
        {tab === "login" ? (
          <LoginForm
            setAuthError={setAuthError}
            closeModal={closeModal}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        ) : (
          <RegisterForm
            setAuthError={setAuthError}
            closeModal={closeModal}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        )}
      </div>
    </main>
  )
}
