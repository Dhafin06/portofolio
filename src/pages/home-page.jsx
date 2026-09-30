import Navbar from "../components/navbar";

import Home from "../sections/home";
import About from "../sections/about";
import Skills from "../sections/skills";
import Projects from "../sections/projects";
import Certifications from "../sections/certifications";
import HomeFooter from "../sections/home-footer";

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <HomeFooter />
      </main>
    </>
  );
}

export default HomePage;