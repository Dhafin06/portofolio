import { useMemo, useState } from "react";
import {
  projectCategories,
  projects,
} from "../data/projects";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-neutral-100 px-6 py-24 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              Selected Work
            </p>

            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-neutral-950 md:text-6xl">
              All projects.
            </h2>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <p className="max-w-xl text-sm leading-7 text-neutral-500 md:text-base lg:text-right">
              A collection of projects I have worked on across software
              development and information systems.
            </p>

            {/* Filter */}
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`
                      rounded-full px-4 py-2 text-xs font-medium
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-neutral-950 text-white"
                          : "border border-neutral-200 bg-white text-neutral-500 hover:border-neutral-300 hover:text-neutral-950"
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px bg-neutral-200" />

        {/* Projects Grid */}
        <div className="mt-10 grid gap-x-6 gap-y-16 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
            >
              {/* Project Preview */}
              <div className="relative overflow-hidden rounded-2xl bg-neutral-200">
                <div
                  className={`
                    relative aspect-[16/10] overflow-hidden
                    transition-transform duration-700
                    group-hover:scale-[1.015]
                    project-preview-${project.visual}
                  `}
                >
                  {/* Background */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-950" />

                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/[0.08] blur-3xl" />

                    <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/[0.06] blur-3xl" />

                    <div className="absolute inset-0 opacity-[0.08]">
                      <div className="absolute left-0 top-1/2 h-px w-full bg-white" />
                      <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
                    </div>
                  </div>

                  {/* Project Mockup */}
                  <div className="absolute inset-x-[10%] top-[12%] bottom-[8%] overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                    <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-neutral-950 px-4">
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                    </div>

                    <div className="relative flex h-[calc(100%-2rem)] items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />

                      <div className="relative text-center">
                        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
                          {project.type}
                        </p>

                        <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white/90 md:text-4xl">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div
                    className="
                      absolute bottom-5 right-5
                      flex h-11 w-11 items-center justify-center
                      rounded-full bg-white text-neutral-950
                      opacity-0 translate-y-2
                      transition-all duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <span className="text-lg">↗</span>
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="mt-5">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xl font-medium tracking-[-0.025em] text-neutral-950 md:text-2xl">
                      {project.title}
                    </p>

                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
                      {project.type}
                    </p>
                  </div>

                  <span className="pt-1 text-xs text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-4 max-w-lg text-sm leading-6 text-neutral-500">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border border-neutral-200
                        bg-white
                        px-3 py-1.5
                        text-[10px]
                        font-medium
                        text-neutral-500
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-neutral-200 pt-6">
          <div className="flex items-center justify-between text-xs text-neutral-400">
            <span>
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1
                ? "Project"
                : "Projects"}
            </span>

            <span>Selected Work</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;