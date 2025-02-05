import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"

import asset_logo from "./logo.svg"
import { IoSearch } from "react-icons/io5"
import { FaArrowRight } from "react-icons/fa6"

export default function Home() {
  return (
    <Fragment>
      <main className="w-full max-w-screen-2xl mx-auto px-4 md:px-12">
        <nav className="flex gap-6 my-4 items-center">
          <Image className="w-full max-w-[8rem]" src={asset_logo} alt="" />
          <span className="w-full" />

          <button className="whitespace-nowrap">
            <span>Launch</span>
          </button>

          <button className="whitespace-nowrap">
            <span>Invest</span>
          </button>

          <button className="whitespace-nowrap">
            <span>My Profile</span>
          </button>

          <button className="p-2 ml-4 shrink-0 size-10 grid place-items-center text-xl rounded-full bg-gray-100 hover:bg-gray-200">
            <IoSearch />
          </button>
        </nav>

        <section className="mt-24 flex items-center gap-12">
          <div className="shrink-0 pb-10">
            <h1 className="font-title max-w-xl font-black text-5xl">
              Raise funds, get market insights, invest and launch products.
            </h1>

            <p className="max-w-lg text-lg mt-4">
              YoloPad is the one stop for monetizing your products. Our
              automated agents take care of everything from raising funds to
              launching your project.
            </p>

            <button className="mt-6 group text-lg text-white flex items-center gap-4 bg-yolo-blue rounded-full px-8 py-3 font-bold">
              <span>Get started</span>
              <FaArrowRight className="scale-110 group-hover:translate-x-px" />
            </button>
          </div>
        </section>
      </main>

      <div className="bg-black/7 pt-16 pb-24 mt-32">
        <main className="w-full max-w-screen-2xl mx-auto px-4 md:px-12">
          <nav className="flex items-center gap-4 justify-between">
            <h2 className="text-2xl font-semibold">Top performing projects</h2>
            <Link href="/#" className="group text-lg flex items-center gap-4">
              <strong className="font-semibold">View all</strong>
              <FaArrowRight className="scale-110 group-hover:translate-x-px" />
            </Link>
          </nav>

          <section className="grid gap-6 mt-8 grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={`item-${index}`}
                className="bg-white drop-shadow rounded-xl overflow-hidden"
              >
                <figure className="bg-slate-200 w-full h-32" />
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
