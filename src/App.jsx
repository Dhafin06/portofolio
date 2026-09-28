import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home-page";
import ContactPage from "./pages/contact-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;