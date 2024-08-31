import { Footer } from "@/components/global/Footer"
import { PropsWithChildren } from "react"

const PropertyPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default PropertyPageLayout
