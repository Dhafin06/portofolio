import { Link } from "react-router-dom";

const contactLinks = [
  {
    number: "01",
    label: "EMAIL",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },
  {
    number: "02",
    label: "GITHUB",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
  {
    number: "03",
    label: "LINKEDIN",
    value: "linkedin.com/in/yourusername",
    href: "https://www.linkedin.com/in/yourusername/",
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-white">
      {/* Navigation */}
      <header className="px-6 py-5 md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            to="/"
            className="
              text-[21px]
              font-extrabold
              tracking-[-0.04em]
              text-white
            "
          >
            Dhafin.
          </Link>

          <Link
            to="/"
            className="
              rounded-full
              border border-white/15
              px-5 py-2.5
              text-sm font-medium
              text-neutral-300
              transition-all duration-300
              hover:border-white/40
              hover:bg-white
              hover:text-black
            "
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main */}
      <main>
        <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
          {/* Background Lines */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
            <div className="absolute left-[-10%] top-[28%] h-px w-[120%] rotate-[3deg] bg-white" />

            <div className="absolute left-[-10%] top-[52%] h-px w-[120%] rotate-[-3deg] bg-white" />

            <div className="absolute left-[45%] top-[-20%] h-[140%] w-px rotate-[12deg] bg-white" />
          </div>

          <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 md:px-8 lg:px-10">
            <div className="grid w-full gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              {/* Left */}
              <div className="flex flex-col justify-center">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                  Get in touch
                </p>

                <h1
                  className="
                    mt-6
                    max-w-3xl
                    text-6xl font-semibold
                    leading-[0.82]
                    tracking-[-0.065em]
                    text-white
                    md:text-7xl
                    lg:text-[7rem]
                  "
                >
                  Let&apos;s
                  <br />
                  work
                  <br />
                  together.
                </h1>

                <p className="mt-10 max-w-lg text-sm leading-7 text-neutral-400 md:text-base">
                  Looking for the next problem worth solving. I&apos;m open to
                  opportunities where I can contribute to software,
                  information systems, and digital workflows.
                </p>

                <a
                  href="/cv/Dhafin-Aksanidra-CV.pdf"
                  download="Dhafin-Aksanidra-CV.pdf"
                  className="
                    mt-8 flex w-fit items-center gap-3
                    rounded-full
                    bg-white
                    px-6 py-3.5
                    text-sm font-medium
                    text-black
                    transition-all duration-300
                    hover:-translate-y-0.5
                  "
                >
                  Download Resume
                  <span>↓</span>
                </a>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-center">
                <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
                  {contactLinks.map((contact) => (
                    <a
                      key={contact.number}
                      href={contact.href}
                      target={
                        contact.label === "EMAIL"
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        contact.label === "EMAIL"
                          ? undefined
                          : "noreferrer"
                      }
                      className="
                        group flex
                        items-center
                        justify-between
                        gap-6
                        px-2
                        py-7
                        transition-all
                        duration-300
                        hover:px-4
                      "
                    >
                      <div className="flex items-center gap-5">
                        <span className="text-[10px] font-medium tracking-[0.15em] text-neutral-600">
                          {contact.number}
                        </span>

                        <div>
                          <p className="text-[9px] font-medium tracking-[0.2em] text-neutral-500">
                            {contact.label}
                          </p>

                          <p className="mt-2 text-sm text-neutral-300 transition-colors duration-300 group-hover:text-white">
                            {contact.value}
                          </p>
                        </div>
                      </div>

                      <span className="text-sm text-neutral-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>

                <a
                  href="mailto:your-email@example.com"
                  className="
                    group mt-8 flex
                    items-center
                    justify-center
                    rounded-full
                    border border-white/30
                    px-6 py-4
                    text-sm font-medium
                    text-white
                    transition-all duration-300
                    hover:border-white
                    hover:bg-white
                    hover:text-black
                  "
                >
                  Send Me a Message

                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 text-xs text-neutral-500 md:px-8 lg:px-10">
          <span>Dhafin Aksanidra</span>

          <Link
            to="/"
            className="transition-colors duration-300 hover:text-white"
          >
            Back to portfolio ↑
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;