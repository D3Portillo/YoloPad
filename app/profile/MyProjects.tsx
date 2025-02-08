"use client"

import { useUserProjects } from "@/atoms/projects"
import { useAccount } from "wagmi"

export default function MyProjects() {
  const { address } = useAccount()
  const { data: projects } = useUserProjects(address)

  console.debug({ projects })
  return <div className="bg-black/3 w-full h-32"></div>
}
