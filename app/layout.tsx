import { Header } from "@/components/global/Header"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { AuthModalProvider } from "@/providers/AuthModalProvider"
import { ModalProvider } from "@/providers/MapModalProvider"
import { PropertyPopupProvider } from "@/providers/PropertyPopupProvider"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Suspense } from "react"
import { useAuthUser } from "./_actions/_authActions.ts"
import "./globals.css"

// const calSans = localFont({
//   src: "../public/fonts/CalSans-SemiBold.otf",
//   variable: "--font-cal",
// });
const circular = localFont({
  src: [
    {
      path: "../public/fonts/CircularStd-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CircularStd-BookItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/CircularStd-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/CircularStd-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/CircularStd-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/CircularStd-BoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/CircularStd-Black.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/CircularStd-BlackItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-circular",
})

export const metadata: Metadata = {
  title: "Rentlify",
  description:
    "Enjoy the ease of booking, embark on a journey of unforgettable adventures",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const authUser = await useAuthUser()
  return (
    <html lang="en">
      <body className={cn(circular.className, "overflow-x-hidden")}>
        <Suspense>
          <AuthModalProvider>
            <PropertyPopupProvider>
              <TooltipProvider delayDuration={100}>
                <ModalProvider>
                  <Header authUser={authUser} />
                  {children}
                </ModalProvider>
              </TooltipProvider>
            </PropertyPopupProvider>
          </AuthModalProvider>
        </Suspense>
      </body>
    </html>
  )
}
