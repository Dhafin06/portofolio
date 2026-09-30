import { Link } from "react-router-dom";

import Navbar from "../components/navbar";

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="min-h-screen px-6 pb-20 pt-36 md:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-5xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                Get in touch
              </p>

              <h1
                className="
                  mt-6
                  text-6xl
                  font-semibold
                  leading-[0.9]
                  tracking-[-0.055em]
                  text-white
                  md:text-8xl
                  lg:text-[9rem]
                "
              >
                Let&apos;s work
                <br />
                together.
              </h1>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-neutral-400 md:text-base">
                I&apos;m open to opportunities, collaborations, and projects
                where I can contribute through technology, business analysis,
                and information systems.
              </p>

              <a
                href="/cv/Dhafin-Aksanidra-CV.pdf"
                download
                className="
                  mt-8
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/20
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                "
              >
                Download Resume
                <span className="ml-3">↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="border-t border-white/[0.08] px-6 py-24 md:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Email */}
              <a
                href="mailto:your-email@example.com"
                className="
                  group
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                  hover:bg-white/[0.04]
                "
              >
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Email
                </p>

                <p className="mt-6 text-base text-neutral-200">
                  your-email@example.com
                </p>

                <span className="mt-8 block text-sm text-neutral-500 transition-colors group-hover:text-white">
                  Send an email ↗
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                  hover:bg-white/[0.04]
                "
              >
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  GitHub
                </p>

                <p className="mt-6 text-base text-neutral-200">
                  github.com/yourusername
                </p>

                <span className="mt-8 block text-sm text-neutral-500 transition-colors group-hover:text-white">
                  Visit GitHub ↗
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yourusername/"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                  hover:bg-white/[0.04]
                "
              >
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  LinkedIn
                </p>

                <p className="mt-6 text-base text-neutral-200">
                  linkedin.com/in/yourusername
                </p>

                <span className="mt-8 block text-sm text-neutral-500 transition-colors group-hover:text-white">
                  Visit LinkedIn ↗
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Message */}
        <section className="border-t border-white/[0.08] px-6 py-24 md:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                  Start a conversation
                </p>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                  Have something in mind?
                </h2>
              </div>

              <a
                href="mailto:your-email@example.com"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-4
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:bg-neutral-200
                "
              >
                Send Me a Message
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-7 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          <p>
            © {new Date().getFullYear()} Dhafin Aksanidra. All rights reserved.
          </p>

          <Link
            to="/"
            className="transition-colors duration-300 hover:text-white"
          >
            Dhafin. ↗
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;