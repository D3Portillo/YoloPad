"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"

import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"
import { useAccount } from "wagmi"
import { useState } from "react"
import ConnectedOnlyAction from "../ConnectedOnlyAction"

export default function ModalHelp({ trigger }: { trigger: React.ReactNode }) {
  const [name, setName] = useState("")
  const { address } = useAccount()

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogTitle asChild>
          <h2 className="font-bold text-2xl">
            Let's pick the best launch strategy for your project
          </h2>
        </DialogTitle>

        <label className="mt-2">
          <p className="mb-1.5">
            Explain what your project is and target audience
          </p>
          <textarea
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="The better you explain, the better we can help you."
            className="bg-yolo-blue/5 font-medium border-2 focus-within:border-yolo-blue/70 border-black/10 outline-none w-full min-h-28 px-4 py-3 rounded-xl"
          />
        </label>
        <ConnectedOnlyAction>
          <button className="bg-black rounded-xl text-white font-semibold px-4 h-12">
            Make suggestion
          </button>
        </ConnectedOnlyAction>
      </DialogContent>
    </Dialog>
  )
}
