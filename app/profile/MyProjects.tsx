"use client"

import { useUserProjects } from "@/atoms/projects"
import MainContainer from "@/components/MainContainer"
import { useAccount } from "wagmi"

export default function MyProjects() {
  const { address } = useAccount()
  const { data: projects } = useUserProjects(address)

  return (
    <div className="bg-black/3 pt-20 pb-32 w-full min-h-screen">
      <MainContainer>
        <nav className="flex items-center gap-4 justify-between">
          <div>
            <h2 className="text-3xl font-bold">Your Projects</h2>
            <p className="mt-2 opacity-80">
              Manage your projects and monitor their progress.
            </p>
          </div>
        </nav>
        <section className="grid gap-6 mt-8 grid-cols-5">
          {projects.map((project) => (
            <div
              key={`item-${project._id}`}
              className="bg-white border rounded-xl overflow-hidden"
            >
              <figure
                style={{
                  backgroundImage: `url(https://images.yourstory.com/cs/1/b3cc3444ab5e11e88691f70342131e20/Whatissoftwareandtypesofsoftwarewithexamples1575272423828jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75)`,
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
      </MainContainer>
    </div>
  )
}
