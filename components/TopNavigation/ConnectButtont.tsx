"use client"

import { beautifyAddress, cn } from "@/lib/utils"
import { useRkAccountModal } from "@/lib/wallet"
import { Fragment } from "react"
import { FaChevronDown } from "react-icons/fa6"

export default function ConnectButton() {
  const { openAccountModal, address } = useRkAccountModal()

  return (
    <button
      onClick={openAccountModal}
      className={cn(
        "whitespace-nowrap border hover:border-black/20 inline-flex items-center gap-2.5 font-medium py-1.5 rounded-lg",
        address ? "pl-4 pr-3" : "px-4"
      )}
    >
      {address ? (
        <Fragment>
          <span>{beautifyAddress(address)}</span>
          <FaChevronDown className="text-[90%]" />
        </Fragment>
      ) : (
        <span>Connect Wallet</span>
      )}
    </button>
  )
}
