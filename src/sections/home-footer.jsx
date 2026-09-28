import { Link } from "react-router-dom";

function HomeFooter() {
  return (
    <footer className="bg-[#0d0f12] text-white">
      {/* CTA */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        {/* Background Lines */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <div className="absolute left-[-10%] top-[40%] h-px w-[120%] rotate-[4deg] bg-white" />

          <div className="absolute left-[-10%] top-[70%] h-px w-[120%] rotate-[-3deg] bg-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-8 md:py-36 lg:px-10 lg:py-40">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                Have a project in mind?
              </p>

              <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-white md:text-7xl lg:text-8xl">
                Let&apos;s build
                <br />
                something useful.
              </h2>
            </div>

            <Link
              to="/contact"
              className="
                group flex w-fit items-center gap-4
                rounded-full
                border border-white/30
                px-6 py-3.5
                text-sm font-medium
                text-white
                transition-all duration-300
                hover:border-white
                hover:bg-white
                hover:text-black
              "
            >
              Contact Me

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-7 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          <p>
            © {new Date().getFullYear()} Dhafin Aksanidra. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition-colors duration-300 hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;