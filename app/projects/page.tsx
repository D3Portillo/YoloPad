import { Fragment } from "react"
import Link from "next/link"

import MainContainer from "@/components/MainContainer"

import { RiSparkling2Fill } from "react-icons/ri"

export default function PageProjects() {
  return (
    <Fragment>
      <hr />
      <MainContainer className="pt-20 pb-32">
        <nav className="flex items-center gap-4 justify-between">
          <div>
            <h2 className="text-3xl font-bold">Investment opportunities</h2>
            <p className="mt-2 opacity-80">
              Browse current investment opportunities on YoloPad.
            </p>
          </div>
        </nav>

        <section className="grid gap-6 mt-8">
          <ProjectItem
            title="YoloPad"
            image="https://www.yolopad.xyz/opengraph-image.png"
            description="The all-in-one platform to manage your projects."
          />

          <ProjectItem
            title="IntentionsAI"
            image="https://cdn.prod.website-files.com/5ff65c460ce39f5ec5681c6a/606dffab53ccc50dd9661962_personal-ai-desktop-app.png"
            description="Your personal AI assistant to help you stay focused."
          />

          <ProjectItem
            title="MetaClub App"
            image="https://cdn.dribbble.com/userupload/5439494/file/original-48826270e8855ceb8af8829a11085291.jpg?format=webp&resize=400x300&vertical=center"
            description="The best social + productivity app for your team."
          />
        </section>
      </MainContainer>
    </Fragment>
  )
}

function ProjectItem({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) {
  return (
    <Link
      href="#"
      className="bg-white group p-3 flex border border-black/5 hover:drop-shadow-sm rounded-xl overflow-hidden"
    >
      <figure
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-yolo-blue/15 h-56 rounded-lg w-80 shrink-0"
      />
      <div className="px-6 pt-2 pb-3.5 flex flex-col w-full h-full">
        <nav className="flex items-center">
          <h3 className="font-semibold flex-grow text-xl">{title}</h3>

          <button className="text-sm hover:underline text-yolo-blue flex items-center gap-1">
            <RiSparkling2Fill />
            <span>Run analysis</span>
          </button>
        </nav>
        <p className="mt-1 opacity-80">{description}</p>

        <nav className="flex items-start gap-14 mt-3">
          <div>
            <h3 className="text-yolo-blue-light font-medium text-sm">
              Participants
            </h3>

            <div className="text-lg inline-flex items-center gap-2">
              <strong>32,000</strong>
              <span className="inline-flex -space-x-2">
                <div className="size-6 rounded-full bg-black" />
                <div className="size-6 rounded-full bg-slate-600" />
                <div className="size-6 rounded-full bg-lime-600" />
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-yolo-blue-light font-medium text-sm">
              YoloScore
            </h3>

            <div className="text-lg inline-flex items-center gap-1">
              <strong>90% 🚀</strong>
            </div>
          </div>

          <div>
            <h3 className="text-yolo-blue-light font-medium text-sm">
              Strategy
            </h3>

            <div className="mt-0.5 bg-yolo-blue/7 text-yolo-blue text-[80%] px-3 py-1 rounded-full font-bold">
              Token Bonds
            </div>
          </div>
        </nav>

        <div className="flex-grow" />

        <nav className="flex items-end gap-8 mt-2">
          <div className="flex-grow">
            <h3 className="text-yolo-blue-light font-medium text-sm">
              Total raised
            </h3>

            <span className="text-lg">
              <strong>750.00</strong>{" "}
              <span className="opacity-80 text-[80%]">/ 3,000.00 ETH</span>
            </span>

            <div className="h-1.5 mt-1 rounded-full overflow-hidden w-full bg-yolo-blue/5">
              <div
                className="h-full rounded-full bg-yolo-blue"
                style={{
                  width: "25%",
                }}
              />
            </div>
          </div>

          <div>
            <p className="text-center opacity-80 text-sm">
              Ends in <strong>3d:4h:5min</strong>
            </p>
            <button className="mt-1 text-white flex items-center gap-4 bg-yolo-blue rounded-full px-8 py-3 font-bold">
              Invest from 0.1 ETH
            </button>
          </div>
        </nav>
      </div>
    </Link>
  )
}
