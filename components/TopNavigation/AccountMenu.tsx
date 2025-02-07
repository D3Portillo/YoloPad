"use client"

import type { PropsWithChildren } from "react"
import Link from "next/link"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

import { IoMdExit } from "react-icons/io"
import { PiRocketLaunchFill } from "react-icons/pi"
import { MdAccountBalance, MdOutlineManageAccounts } from "react-icons/md"
import { useDisconnect } from "wagmi"

function AccountMenu({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<{
  isOpen?: boolean
  onClose?: () => void
}>) {
  const { disconnect } = useDisconnect()

  return (
    <DropdownMenu open={isOpen} onOpenChange={onClose}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        side="bottom"
        className="w-56 [&_*]:text-base"
      >
        <DropdownMenuLabel className="text-black dark:text-white px-3">
          Manage Account
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem className="px-3 py-2" asChild>
            <Link href="/">
              <div className="size-4 grid place-items-center mr-3">
                <MdOutlineManageAccounts className="scale-[1.15]" />
              </div>
              <span>My Profile</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="px-3 py-2" asChild>
            <Link href="/">
              <div className="size-4 grid place-items-center mr-3">
                <MdAccountBalance className="scale-110" />
              </div>
              <span>My Portfolio</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="px-3 py-2" asChild>
            <Link href="/">
              <div className="size-4 grid place-items-center mr-3">
                <PiRocketLaunchFill className="scale-110" />
              </div>
              <span>My Projects</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="px-4 !text-red-500 font-medium flex items-center gap-4 justify-between py-2 w-full"
          asChild
        >
          <button onClick={() => disconnect()}>
            <span>Disconnect Wallet</span>
            <IoMdExit className="scale-125" />
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AccountMenu
