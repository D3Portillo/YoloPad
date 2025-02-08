"use client"

import { useRkAccountModal } from "@/lib/wallet"
import { cloneElement, type ReactElement } from "react"
import { useAccount } from "wagmi"

export default function ConnectedOnlyAction({
  children,
}: {
  children: ReactElement
}) {
  const { isConnected } = useAccount()
  const { openAccountModal } = useRkAccountModal()

  if (Array.isArray(children))
    throw new Error("HybridConnect only accepts a single child")

  if (!isConnected) {
    return cloneElement(children, {
      // @ts-ignore
      ...children.props,
      onClick: openAccountModal,
    })
  }

  return children
}
