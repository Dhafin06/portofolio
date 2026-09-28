import { useState } from "react";

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

function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "your-email@example.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <footer id="contact" className="bg-[#0d0f12] text-white">
      {/* CTA */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        {/* Background Lines */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <div className="absolute left-[-10%] top-[42%] h-px w-[120%] rotate-[4deg] bg-white" />
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

            <a
              href="#contact-details"
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
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact-details"
        className="relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32 lg:px-10 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* Left */}
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                Get in touch
              </p>

              <h2 className="mt-6 max-w-3xl text-6xl font-semibold leading-[0.85] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
                Let&apos;s
                <br />
                work
                <br />
                together.
              </h2>

              <p className="mt-8 max-w-lg text-sm leading-7 text-neutral-400 md:text-base">
                Have a project, opportunity, or idea in mind? Feel free to
                reach out and let&apos;s start a conversation.
              </p>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="
                  group mt-8 inline-flex items-center gap-3
                  rounded-full
                  bg-white
                  px-6 py-3.5
                  text-sm font-medium
                  text-black
                  transition-all duration-300
                  hover:-translate-y-0.5
                "
              >
                {copied ? "Email Copied" : "Copy Email"}

                <span className="text-base">
                  {copied ? "✓" : "↗"}
                </span>
              </button>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-end">
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
                      group flex items-center
                      justify-between gap-6
                      py-6
                      transition-colors duration-300
                      hover:bg-white/[0.025]
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
                href={`mailto:${email}`}
                className="
                  group mt-8 flex
                  items-center justify-center
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

export default Contact;