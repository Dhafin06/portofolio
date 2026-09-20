import profileImage from "../assets/images/profile.png";
import Lanyard from "../components/lanyard";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-neutral-100 px-6 py-24 md:px-8 lg:px-10"
    >
      <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl items-center">
        <div
          className="
            grid
            w-full
            overflow-hidden
            rounded-3xl
            border
            border-violet-500/40
            bg-neutral-950
            shadow-[0_0_45px_rgba(139,92,246,0.18)]
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >
          {/* About Content */}
          <div className="flex flex-col justify-center px-8 py-14 md:px-12 lg:px-16">
            <p className="text-sm font-medium tracking-wide text-violet-400">
              About Me
            </p>

            <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              A little bit about me.
            </h2>

            <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-neutral-400 md:text-base">
              <p>
                I’m Dhafin Aksanidra, an Information Systems student with an
                interest in business analysis, IT governance, and software
                development.
              </p>

              <p>
                Through academic projects, internships, and organizational
                experiences, I have worked with both technical and
                business-oriented approaches to understand problems and build
                practical solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  S1
                </p>

                <p className="mt-2 text-xs font-medium text-neutral-500 md:text-sm">
                  Information Systems
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  3+
                </p>

                <p className="mt-2 text-xs font-medium text-neutral-500 md:text-sm">
                  Areas of Experience
                </p>
              </div>
            </div>

            <p className="mt-10 text-sm text-neutral-500">
              Building with purpose, learning through experience.
            </p>
          </div>

          {/* Lanyard */}
          <div className="relative min-h-[520px] overflow-hidden md:min-h-[600px] lg:min-h-[680px]">
            <Lanyard
              frontImage={profileImage}
              backImage={profileImage}
              lanyardWidth={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;