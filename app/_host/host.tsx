// import { BookingRequests } from "@/components/pages/host/BookingRequests"
// import { Earnings } from "@/components/pages/host/Earnings"
// import { HostHeader } from "@/components/pages/host/HostHeader"
// import { HostStatistics } from "@/components/pages/host/HostStatistics"
// import { requireAuth } from "@/lib/utils"
// import React, { Suspense } from "react"
// import { useAuthUser } from "../_actions/_authActions.ts/index.ts"

// const Host = async () => {
//   const authUser = await useAuthUser()
//   await requireAuth(authUser)
//   return (
//     <main className="relative flex flex-col justify-between gap-10 py-[70px] lg:min-h-screen">
//       <HostHeader authUser={authUser} />
//       <HostStatistics />
//       <section className="container grid flex-1 grid-cols-1 gap-4 lg:grid-cols-2">
//         <BookingRequests />
//         {/* <Earnings /> */}
//       </section>
//     </main>
//   )
// }

// export default Host
