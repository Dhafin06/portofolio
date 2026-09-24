import { skills, capabilities } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-[#0d0f12] px-6 py-24 text-white md:px-8 lg:px-10"
    >
      {/* Background Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute left-[-10%] top-[20%] h-px w-[120%] rotate-[7deg] bg-white" />
        <div className="absolute left-[-10%] top-[65%] h-px w-[120%] rotate-[-5deg] bg-white" />
        <div className="absolute left-[20%] top-[-20%] h-[140%] w-px rotate-[25deg] bg-white" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl items-center">
        <div className="grid w-full gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              My Capabilities
            </p>

            <h2 className="mt-4 max-w-lg text-5xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              What I Can Do.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-neutral-400 md:text-base">
              I combine technical knowledge with an understanding of business
              processes to build, analyze, and improve digital solutions.
            </p>

            {/* Skill Icons */}
            <div className="mt-10 grid max-w-md grid-cols-5 gap-3 sm:grid-cols-6">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="
                      group
                      relative
                      flex
                      aspect-square
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-white/[0.04]
                      text-neutral-500
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-white/15
                      hover:bg-white/[0.08]
                      hover:text-white
                    "
                    title={skill.name}
                  >
                    <Icon className="text-[23px] transition-transform duration-300 group-hover:scale-110" />

                    <span
                      className="
                        pointer-events-none
                        absolute
                        -bottom-8
                        left-1/2
                        z-20
                        -translate-x-1/2
                        whitespace-nowrap
                        rounded-md
                        bg-white
                        px-2
                        py-1
                        text-[10px]
                        font-medium
                        text-black
                        opacity-0
                        shadow-lg
                        transition-opacity
                        duration-200
                        group-hover:opacity-100
                      "
                    >
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Capability Cards */}
          <div className="grid gap-5 md:grid-cols-2 lg:items-center">
            {capabilities.map((capability) => (
              <article
                key={capability.number}
                className="
                  group
                  relative
                  min-h-[390px]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-[#15181d]
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-white/15
                  hover:bg-[#181b20]
                  md:p-8
                "
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="text-4xl font-light tracking-[-0.04em] text-neutral-300">
                    {capability.number}
                  </span>

                  <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-600">
                    {capability.eyebrow}
                  </span>
                </div>

                {/* Decorative Icon */}
                <div className="mt-12 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-neutral-300">
                  <div className="h-5 w-5 rounded border border-current opacity-70" />
                </div>

                <h3 className="mt-7 max-w-xs text-xl font-medium tracking-[-0.02em] text-white">
                  {capability.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-neutral-500">
                  {capability.description}
                </p>

                {/* Tags */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {capability.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-md
                        border
                        border-white/[0.07]
                        bg-black/20
                        px-2.5
                        py-1.5
                        text-[10px]
                        font-medium
                        text-neutral-500
                        transition-colors
                        duration-300
                        group-hover:text-neutral-300
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Glow */}
                <div className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl transition-all duration-500 group-hover:bg-white/[0.06]" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;