import profileImage from "../assets/images/profile.png";
import ImageHover from "../components/image-hover";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-neutral-100 px-6 pt-32 md:px-8 lg:px-10"
    >
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-16 lg:grid-cols-2">
        
        {/* Introduction */}
        <div className="lg:-translate-x-6 lg:-translate-y-20">
          <p className="mb-4 text-sm text-neutral-500">
            Hello, I’m
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
            Dhafin Aksanidra
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-neutral-600">
            Welcome to my personal portfolio.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-end lg:translate-x-6">
          <ImageHover
            src={profileImage}
            alt="Dhafin Aksanidra"
            className="h-[500px] w-full max-w-md"
            spotlightColor="rgba(255, 255, 255, 0.25)"
          />
        </div>

      </div>
    </section>
  );
}

export default Home;