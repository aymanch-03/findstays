import { useRouter } from "next/navigation"

type QueryParams = {
  [key: string]: string | number | boolean | null | undefined
}

const useUpdateQueryParams = () => {
  const router = useRouter()

  const updateQueryParams = (newParams: QueryParams) => {
    const currentUrl = new URL(window.location.href)
    const currentParams = currentUrl.searchParams

    Object.keys(newParams).forEach((key) => {
      const value = newParams[key]

      if (value === null || value === undefined) {
        currentParams.delete(key)
      } else {
        currentParams.set(key, String(value))
      }
    })

    router.push(`${currentUrl.pathname}?${currentParams.toString()}`)
  }

  return updateQueryParams
}

export default useUpdateQueryParams
