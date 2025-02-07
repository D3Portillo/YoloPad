import type { JSX, PropsWithChildren } from "@/types/common"

import Image from "next/image"

import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { FaChevronDown, FaRobot } from "react-icons/fa6"

import { IoSearch } from "react-icons/io5"
import asset_logo from "@/app/logo.svg"
import Link from "next/link"
import ConnectButton from "./ConnectButtont"
import { RiSparkling2Fill } from "react-icons/ri"

export default function TopNavigation() {
  return (
    <nav
      suppressHydrationWarning
      className="flex font-medium gap-6 my-4 items-center"
    >
      <Link className="w-full max-w-[8rem]" href="/">
        <Image className="w-full" src={asset_logo} alt="" />
      </Link>
      <span className="w-full" />

      <Link
        href="/tools"
        className="whitespace-nowrap inline-flex items-center gap-1.5"
      >
        <RiSparkling2Fill />
        <span>
          AI Tools <span className="text-[80%] font-normal">Beta</span>
        </span>
      </Link>

      <div className="h-6 w-px bg-black shrink-0 opacity-20" />

      <Link href="/projects" className="whitespace-nowrap">
        <span>Invest</span>
      </Link>

      <NavigationMenu.Root className="relative">
        <NavigationMenu.List className="flex items-center">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="flex items-center gap-1.5 text-black focus:outline-none">
              Launch <FaChevronDown className="text-[90%]" />
            </NavigationMenu.Trigger>

            <NavigationMenu.Content className="absolute left-0 mt-2 w-72 bg-white shadow-lg rounded-xl p-4 border">
              <ul className="flex flex-col gap-1">
                <ListItem title="Incentivized Campaign">
                  Best for liquidity bootstrapping. Raise funds by offering your
                  tokens for staking LP Tokens.
                </ListItem>

                <ListItem title="Fair Token Launch">
                  Set a goal and execute a fair, proportional token distribution
                  based on the amount raised.
                </ListItem>

                <ListItem title="Token Bonds">
                  Best for price discovery. Raise funds by offering your tokens
                  at a discount.
                </ListItem>

                <ListItem title="NFT Crowdsale">
                  Raise funds by offering rewards and governance rights to your
                  community.
                </ListItem>

                <hr className="opacity-50" />

                <ListItem
                  title={
                    <nav className="inline-flex gap-2 items-center">
                      <span>Help me choose</span>
                      <div className="bg-yolo-green text-[80%] inline-flex items-center gap-1 rounded-full px-2 font-bold">
                        <FaRobot className="text-lg" />
                        <span>AGENT</span>
                      </div>
                    </nav>
                  }
                >
                  Use our AI agent to help you choose the best fundraising for
                  your project.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <ConnectButton />

      <button className="p-2 shrink-0 size-10 grid place-items-center text-xl rounded-full bg-gray-100 hover:bg-gray-200">
        <IoSearch />
      </button>
    </nav>
  )
}

function ListItem({
  title,
  children,
}: PropsWithChildren<{ title: JSX.Element | string }>) {
  return (
    <li>
      <a href="#" className="block px-4 pt-2 pb-3.5 hover:bg-black/3 rounded">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-xs mt-1 opacity-70">{children}</p>
      </a>
    </li>
  )
}
