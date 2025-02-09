import Link from "next/link"
import { Fragment } from "react"

import { FaArrowRight } from "react-icons/fa6"
import MainContainer from "@/components/MainContainer"
import ModalCreateProject from "@/components/ModalCreateProject"

import asset_main from "@/assets/mascot.png"
import Image from "next/image"

export default function PageHome() {
  return (
    <Fragment>
      <MainContainer>
        <section className="mt-12 flex items-center gap-12">
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

          <div className="flex-grow" />

          <figure className="max-w-xl">
            <Image
              className="w-full"
              placeholder="blur"
              src={asset_main}
              alt=""
            />
          </figure>
        </section>
      </MainContainer>

      <div className="bg-yolo-blue/3 pt-24 pb-32 mt-56">
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
            {[
              {
                name: "Telegram App",
                image:
                  "https://sofy.ai/wp-content/uploads/2024/04/Developing-Eco-Friendly-App.png",
              },
              {
                name: "OZZ Game",
                image:
                  "https://cdn.prod.website-files.com/63dfff3a678a17296427944f/64308e3011af0db9f0826bd9_Feature%20Image.png",
              },
              {
                name: "EZ Money",
                image:
                  "https://solveit.dev/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdXNFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0027ecc9eea77cb03d37f5208fd69e8c62ba3818/cover2Social%20Media%20App-min.jpg",
              },
              {
                name: "Pidu Learn",
                image:
                  "https://i.pinimg.com/736x/06/b0/f9/06b0f914991d871736a7bcf09226fa06.jpg",
              },
            ].map((project) => (
              <div
                key={`item-${project.image}`}
                className="bg-white border rounded-xl overflow-hidden"
              >
                <figure
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="bg-yolo-blue/7 border-b w-full h-32"
                />
                <p className="text-black p-4">
                  <strong>{project.name}</strong>
                </p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </Fragment>
  )
}
