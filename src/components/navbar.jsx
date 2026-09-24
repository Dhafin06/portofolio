import { useEffect, useState } from "react";

const sections = ["about", "skills", "projects", "certifications"];

function Navbar() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "projects",
      "certifications",
    ];

    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length === 0) return;

        const currentSection = visibleSections[0].target.id;

        if (currentSection === "home") {
          setActiveSection(null);
        } else {
          setActiveSection(currentSection);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
        <nav className="hidden rounded-full border border-neutral-200 bg-white p-1.5 md:block">
          <ul className="flex items-center gap-1 text-sm font-medium text-neutral-800">
            {sections.map((section) => {
              const label =
                section.charAt(0).toUpperCase() +
                section.slice(1);

              const isActive = activeSection === section;

              return (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`
                      block rounded-full px-4 py-2
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-black text-white"
                          : "text-neutral-800 hover:bg-neutral-100"
                      }
                    `}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
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