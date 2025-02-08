import type { Address } from "viem"
import useSWR from "swr"
import { getAllProjects } from "@/components/ModalCreateProject/actions"

export const useUserProjects = (user?: Address) => {
  const { data = [], ...query } = useSWR(
    user ? `user-projects-${user}` : null,
    async () => {
      if (!user) return []
      return await getAllProjects(user)
    }
  )

  return {
    data,
    ...query,
  }
}
