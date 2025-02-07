import MainContainer from "@/components/MainContainer"
import Link from "next/link"
import { Fragment } from "react"

import { TbExternalLink } from "react-icons/tb"

export default function PageTools() {
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

          <nav className="flex mt-8 items-center text-sm justify-start gap-2">
            <button className="border border-black bg-black text-white px-4 py-1.5 rounded-full font-bold">
              Everything
            </button>

            <button className="border border-black/10 text-black/80 px-4 py-1.5 rounded-full font-medium">
              Fundraise
            </button>

            <button className="border border-black/1 text-black/80 px-4 py-1.5 rounded-full font-medium">
              Incentivize
            </button>

            <button className="border border-black/10 text-black/80 px-4 py-1.5 rounded-full font-medium">
              Bootstrap
            </button>

            <button className="border border-black/10 text-black/80 px-4 py-1.5 rounded-full font-medium">
              Community
            </button>
          </nav>

          <section className="grid gap-6 mt-6 grid-cols-3">
            <ToolItem
              title="Landing Page Creator"
              description="Every project needs a landing page. Create one in minutes with our drag-and-drop builder."
            />

            <ToolItem
              title="Liquidity Pool Builder"
              description="Create Bootstrap or Reward Liquidity Pools for your project in minutes"
            />

            <ToolItem
              title="Tokenomics Modeler"
              description="Craft a tokenomics model that fits your project with quality insights from our trained AI models."
            />

            <ToolItem
              title="Token Launcher"
              description="Prepare your token, set up a fair launch, and distribute it to your community and posible investors."
            />

            <ToolItem
              title="NFT Launcher"
              description="Prepare your NFT collection, add token-gated access to features and more in just a few clicks."
            />

            <ToolItem
              title="Whitelist Page"
              description="A simple page to collect addresses and more information from your community."
            />

            <ToolItem
              title="Governance Architech"
              description="Allow your community to vote on proposals and guide your project's future."
            />

            <ToolItem
              title="Raise Funds"
              description="Token Bonds, NFT Crowdsale, and more. Choose the best fundraising for your project."
            />

            <ToolItem
              title="Yield Strategies"
              description="Put your tokens to work, let's find the best yield strategies for your project."
            />
          </section>
        </MainContainer>
      </div>
    </Fragment>
  )
}

function ToolItem({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <Link
      href="#"
      className="bg-white group flex border border-black/10 drop-shadow-sm rounded-xl overflow-hidden"
    >
      <div className="bg-yolo-blue/15 size-32 shrink-0" />
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
