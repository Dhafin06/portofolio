import Navbar from "./components/navbar";
import Home from "./sections/home";
import About from "./sections/about";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;