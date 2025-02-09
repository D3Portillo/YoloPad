"use client"

import MainContainer from "@/components/MainContainer"
import Link from "next/link"
import { Fragment, JSX, PropsWithChildren, useState } from "react"
import Image from "next/image"

import { TbExternalLink } from "react-icons/tb"

import { cn } from "@/lib/utils"

import asset_page from "@/assets/icons/web.svg"
import asset_token from "@/assets/icons/token.svg"
import {
  RiCopperCoinLine,
  RiExchangeFundsLine,
  RiGovernmentLine,
  RiTokenSwapLine,
} from "react-icons/ri"
import { GiPostStamp } from "react-icons/gi"
import { PiMailboxBold, PiRocketLaunchBold } from "react-icons/pi"
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"

const ALL_ITEMS = "all"

export default function PageTools() {
  const [filter, setFilter] = useState(ALL_ITEMS)

  return (
    <Fragment>
      <hr />
      <div className="pt-20 pb-32 bg-gradient-to-b from-yolo-blue/3 to-yolo-blue/0">
        <MainContainer>
          <nav className="flex items-center gap-4 justify-between">
            <div>
              <h2 className="text-3xl font-bold">Build faster with YoloPad</h2>
              <p className="mt-2 opacity-80">
                Create along our automated AI-tools and iterate faster.
              </p>
            </div>
          </nav>

          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList asChild>
              <nav className="flex mt-8 items-center text-sm justify-start gap-2">
                <TabItem value="all">Everything</TabItem>
                <TabItem value="fundraise">Fundraise</TabItem>
                <TabItem value="incentivize">Incentivize</TabItem>
                <TabItem value="bootstrap">Bootstrap</TabItem>
                <TabItem value="community">Community</TabItem>
              </nav>
            </TabsList>
          </Tabs>

          <section className="grid gap-6 mt-6 grid-cols-3">
            {[
              {
                icon: (
                  <ToolItem
                    title="Landing Page Creator"
                    cover={
                      <CoverImage className="bg-yolo-green-lime/40">
                        <Image alt="" src={asset_page} />
                      </CoverImage>
                    }
                    description="Every project needs a landing page. Create one in minutes with our drag-and-drop builder."
                  />
                ),
                type: "bootstrap",
              },
              {
                icon: (
                  <ToolItem
                    title="Liquidity Pool Builder"
                    cover={
                      <CoverImage>
                        <RiTokenSwapLine className="text-7xl" />
                      </CoverImage>
                    }
                    description="Create Bootstrap or Reward Liquidity Pools for your project in minutes"
                  />
                ),
                type: "incentivize",
              },
              {
                icon: (
                  <ToolItem
                    title="Tokenomics Modeler"
                    cover={
                      <CoverImage className="bg-yolo-blue-light/50">
                        <Image alt="" src={asset_token} />
                      </CoverImage>
                    }
                    description="Craft a tokenomics model that fits your project with quality insights from our trained AI models."
                  />
                ),
                type: "fundraise",
              },
              {
                icon: (
                  <ToolItem
                    title="Token Launcher"
                    cover={
                      <CoverImage className="bg-yolo-blue-light/50">
                        <RiCopperCoinLine className="text-7xl" />
                      </CoverImage>
                    }
                    description="Prepare your token, set up a fair launch, and distribute it to your community and posible investors."
                  />
                ),
                type: "fundraise",
              },
              {
                icon: (
                  <ToolItem
                    title="NFT Launcher"
                    cover={
                      <CoverImage className="bg-yolo-blue-light/50">
                        <GiPostStamp className="text-7xl" />
                      </CoverImage>
                    }
                    description="Prepare your NFT collection, add token-gated access to features and more in just a few clicks."
                  />
                ),
                type: "fundraise",
              },
              {
                icon: (
                  <ToolItem
                    title="Whitelist Page"
                    cover={
                      <CoverImage className="bg-yolo-green-lime/40">
                        <PiMailboxBold className="text-6xl" />
                      </CoverImage>
                    }
                    description="A simple page to collect addresses and more information from your community."
                  />
                ),
                type: "bootstrap",
              },
              {
                icon: (
                  <ToolItem
                    title="Governance Architech"
                    cover={
                      <CoverImage className="bg-yolo-pink/20">
                        <RiGovernmentLine className="text-6xl" />
                      </CoverImage>
                    }
                    description="Allow your community to vote on proposals and guide your project's future."
                  />
                ),
                type: "community",
              },
              {
                icon: (
                  <ToolItem
                    title="Raise Funds"
                    cover={
                      <CoverImage className="bg-yolo-blue-light/50">
                        <PiRocketLaunchBold className="text-6xl" />
                      </CoverImage>
                    }
                    description="Token Bonds, NFT Crowdsale, and more. Choose the best fundraising for your project."
                  />
                ),
                type: "fundraise",
              },
              {
                icon: (
                  <ToolItem
                    title="Yield Strategies"
                    cover={
                      <CoverImage>
                        <RiExchangeFundsLine className="text-7xl" />
                      </CoverImage>
                    }
                    description="Put your tokens to work, let's find the best yield strategies for your project."
                  />
                ),
                type: "incentivize",
              },
            ].map((item, i) => {
              // To not recreate keys we'll hide elements by returning an empty element and not removing from the DOM
              if (filter !== ALL_ITEMS && item.type != filter) return null
              return <Fragment key={`tool-${i}`}>{item.icon}</Fragment>
            })}
          </section>
        </MainContainer>
      </div>
    </Fragment>
  )
}

function ToolItem({
  title,
  description,
  cover,
}: {
  title: string
  description: string
  cover: JSX.Element
}) {
  return (
    <Link
      href="#"
      className="bg-white group flex border border-black/10 drop-shadow-sm rounded-xl overflow-hidden"
    >
      {cover}
      <div className="py-4 pl-6 pr-5 w-full">
        <nav className="flex items-start justify-end">
          <h3 className="font-semibold w-full text-lg">{title}</h3>
          <TbExternalLink className="text-2xl group-hover:translate-x-px group-hover:-translate-y-px" />
        </nav>
        <p className="text-sm mt-1 opacity-80">{description}</p>
      </div>
    </Link>
  )
}

function TabItem({
  value,
  children,
}: PropsWithChildren<{
  value: string
}>) {
  return (
    <TabsTrigger asChild value={value}>
      <button className="border border-black/10 data-[state=active]:border-black data-[state=active]:bg-black text-black/80 data-[state=active]:text-white px-4 py-1.5 rounded-full font-medium data-[state=active]:font-bold">
        {children}
      </button>
    </TabsTrigger>
  )
}

function CoverImage({
  children,
  className,
}: {
  children: JSX.Element
  className?: string
}) {
  return (
    <div
      className={cn(
        "bg-yolo-yellow-soft flex items-center justify-center size-32 p-4 shrink-0",
        className
      )}
    >
      {children}
    </div>
  )
}
