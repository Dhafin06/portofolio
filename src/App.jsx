import Navbar from "./components/navbar";
import Home from "./sections/home";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;