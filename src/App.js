import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import DisabilityInfo from "./Pages/DisabilityInfo";
import EssentialDocs from "./Pages/EssentialDocs";
import Resources from "./Pages/Resources";
import NavBar from "./Navbar/Navbar";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disabilityInfo" element={<DisabilityInfo />} />
          <Route path="/essentialDocs" element={<EssentialDocs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
