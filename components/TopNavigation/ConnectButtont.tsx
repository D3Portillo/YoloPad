"use client"

import { beautifyAddress, cn } from "@/lib/utils"
import { useRkAccountModal } from "@/lib/wallet"
import { Fragment, useState } from "react"

import { MdManageAccounts, MdOutlineManageAccounts } from "react-icons/md"

import AccountMenu from "./AccountMenu"
import { FaChevronRight } from "react-icons/fa6"
import { IoWallet } from "react-icons/io5"

export default function ConnectButton() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const { openAccountModal, address } = useRkAccountModal()

  return (
    <AccountMenu isOpen={isOpenMenu} onClose={() => setIsOpenMenu(false)}>
      <button
        onClick={
          address ? () => setIsOpenMenu((isOpen) => !isOpen) : openAccountModal
        }
        className={cn(
          "whitespace-nowrap border hover:border-black/20 inline-flex items-center gap-2.5 font-medium py-1.5 rounded-lg",
          address ? "pl-4 pr-3" : "px-4"
        )}
      >
        {address ? (
          <Fragment>
            <span>{beautifyAddress(address)}</span>
            <IoWallet className="scale-110 text-yolo-blue" />
          </Fragment>
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>
    </AccountMenu>
  )
}
