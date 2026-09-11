function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-6 py-5 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center">
        {/* Logo */}
        <div className="justify-self-start">
          <a
            href="#home"
            className="text-[21px] font-extrabold tracking-[-0.04em] text-neutral-950"
          >
            Dhafin.
          </a>
        </div>

        {/* Floating Navigation */}
        <nav className="hidden rounded-full border border-neutral-200 bg-white px-6 py-3 md:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-neutral-800">
            <li>
              <a
                href="#about"
                className="transition-opacity hover:opacity-60"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="transition-opacity hover:opacity-60"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="transition-opacity hover:opacity-60"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#certifications"
                className="transition-opacity hover:opacity-60"
              >
                Certifications
              </a>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 justify-self-end">
          <a
            href="#contact"
            className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80 sm:block"
          >
            Hire Me
          </a>

          <button
            type="button"
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-sm font-medium transition-opacity hover:opacity-60"
          >
            ◐
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;