"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"

import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"
import { createProject } from "./actions"
import { useAccount } from "wagmi"
import { useState } from "react"
import ConnectedOnlyAction from "../ConnectedOnlyAction"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function ModalCreateProject({
  trigger,
}: {
  trigger: React.ReactNode
}) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const { address } = useAccount()

  async function handleCreateProject() {
    if (!name?.trim() || !address) return
    await createProject(address, name)
    // Wait for event stack to be empty
    setTimeout(() => setIsOpen(false))
    toast.success("🥳 Yaay. Project created")
    router.push("/profile")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogTitle asChild>
          <h2 className="font-bold text-2xl">Let's create your project</h2>
        </DialogTitle>

        <label className="mt-2">
          <p className="mb-1.5">Have a name for your project?</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Project name"
            className="bg-yolo-blue/5 font-medium border-2 focus-within:border-yolo-blue/70 border-black/10 outline-none w-full h-14 px-4 rounded-xl"
            type="text"
          />
        </label>
        <ConnectedOnlyAction>
          <button
            onClick={handleCreateProject}
            className="bg-black rounded-xl text-white font-semibold px-4 h-12"
          >
            Create Project
          </button>
        </ConnectedOnlyAction>
      </DialogContent>
    </Dialog>
  )
}
