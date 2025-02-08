import Link from "next/link"
import { Fragment } from "react"

import { FaArrowRight } from "react-icons/fa6"
import MainContainer from "@/components/MainContainer"
import ModalCreateProject from "@/components/ModalCreateProject"

export default function PageHome() {
  return (
    <Fragment>
      <MainContainer>
        <section className="mt-24 flex items-center gap-12">
          <div className="shrink-0 pb-10">
            <h1 className="font-title max-w-[36rem] font-black text-5xl">
              Launch, Fundraise & Scale your Web3 Projects.
            </h1>

            <p className="max-w-lg text-lg mt-4">
              YoloPad is your all-in-one platform to manage your projects. Let
              our automated tools handle everything from fundraising to market
              insights, so you can focus on building.
            </p>

            <nav className="mt-6 flex gap-4">
              <ModalCreateProject
                trigger={
                  <button className="group text-lg text-yolo-blue flex items-center gap-4 border-yolo-blue border-2 rounded-full px-8 py-3 font-bold">
                    <span>Create Web3 Project</span>
                    <FaArrowRight className="scale-110 group-hover:translate-x-px" />
                  </button>
                }
              />

              <Link
                href="/tools"
                className="group text-lg text-white flex items-center gap-4 bg-yolo-blue rounded-full px-8 py-3 font-bold"
              >
                <span>Explore Tools</span>
                <FaArrowRight className="scale-110 group-hover:translate-x-px" />
              </Link>
            </nav>
          </div>
        </section>
      </MainContainer>

      <div className="bg-yolo-blue/3 pt-24 pb-32 mt-32">
        <main className="w-full max-w-screen-2xl mx-auto px-4 md:px-12">
          <nav className="flex items-center gap-4 justify-between">
            <div>
              <h2 className="text-2xl font-bold">Most traction</h2>
              <p className="mt-2 opacity-80">
                Projects attracting the most interest right now
              </p>
            </div>

            <Link
              href="/projects"
              className="group text-lg flex items-center gap-4"
            >
              <strong className="font-bold">View all</strong>
              <FaArrowRight className="scale-110 group-hover:translate-x-px" />
            </Link>
          </nav>

          <section className="grid gap-6 mt-8 grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={`item-${index}`}
                className="bg-white border rounded-xl overflow-hidden"
              >
                <figure className="bg-yolo-blue/7 border-b w-full h-32" />
                <p className="text-black p-4">
                  <strong>Telegram App</strong>
                </p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </Fragment>
  )
}
