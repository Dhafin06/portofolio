import profileImage from "../assets/images/profile.png";
import ImageHover from "../components/image-hover";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-neutral-100 px-6 pt-32 md:px-8 lg:px-10"
    >
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div className="lg:-translate-y-20">
            <p className="mb-4 text-sm text-neutral-500">
              Hello, I’m
            </p>

            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-6xl">
              Dhafin Aksanidra
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-neutral-600">
              Welcome to my personal portfolio.
            </p>

            <a
              href="/cv/Dhafin-Aksanidra-CV.pdf"
              download="Dhafin-Aksanidra-CV.pdf"
              className="
                mt-8 inline-flex items-center
                rounded-full bg-black
                px-6 py-3
                text-sm font-medium text-white
                transition-opacity hover:opacity-80
              "
            >
              Download CV
            </a>
          </div>

          {/* Right Image */}
          <div className="flex justify-end lg:translate-y-[-2rem]">
            <ImageHover
              src={profileImage}
              alt="Dhafin Aksanidra"
              className="h-[500px] w-full max-w-md"
              spotlightColor="rgba(255, 255, 255, 0.25)"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;