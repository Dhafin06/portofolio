import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Certifications", id: "certifications" },
  ];

function Navbar() {
  const location = useLocation();

  const [activeSection, setActiveSection] = useState(null);

  const isContactPage = location.pathname === "/contact";
  const isHomePage = location.pathname === "/";

  /*
   * Detect active section on homepage
   */
  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [isHomePage]);

  /*
   * Scroll to section when navigating from another route
   * or when clicking a navbar item.
   */
  useEffect(() => {
    if (!isHomePage || !location.hash) {
      return;
    }

    const sectionId = location.hash.replace("#", "");

    requestAnimationFrame(() => {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }, [isHomePage, location.hash]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-5 md:px-8 lg:px-10">
      <nav
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-[1fr_auto_1fr]
          items-center
        "
      >
        {/* Logo */}
        <div className="justify-self-start">
          <Link
            to="/#home"
            className={`
              inline-flex
              items-center
              rounded-full
              border
              px-5
              py-2.5
              text-base
              font-[900]
              tracking-[-0.03em]
              transition-all
              duration-200
              ${
                isContactPage
                  ? "border-white/10 bg-white/[0.06] text-white hover:bg-white/10"
                  : "border-neutral-200 bg-white/90 text-neutral-950 shadow-sm hover:bg-white"
              }
            `}
          >
            Dhafin.
          </Link>
        </div>

        {/* Navigation */}
        <div
          className={`
            hidden
            items-center
            gap-1
            rounded-full
            border
            p-1
            backdrop-blur-md
            md:flex
            ${
              isContactPage
                ? "border-white/10 bg-white/[0.06]"
                : "border-neutral-200 bg-white/90 shadow-sm"
            }
          `}
        >
          {navItems.map((item) => {
            const isActive =
              isHomePage && activeSection === item.id;

            return (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "bg-neutral-900 text-white"
                      : isContactPage
                        ? "text-neutral-400 hover:bg-white/10 hover:text-white"
                        : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 justify-self-end">
          {!isContactPage && (
            <Link
              to="/contact"
              className="
                hidden
                rounded-full
                bg-black
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition-opacity
                hover:opacity-80
                sm:block
              "
            >
              Contact Me
            </Link>
          )}

          {/* Theme Toggle */}
          <button
            type="button"
            aria-label="Toggle theme"
            className={`
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              text-sm
              font-medium
              transition-all
              duration-200
              ${
                isContactPage
                  ? "border-white/15 bg-white/[0.06] text-white hover:bg-white/10"
                  : "border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100"
              }
            `}
          >
            ◐
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;