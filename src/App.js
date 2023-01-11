import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import DisabilityInfo from "./Pages/DisabilityInfo";
import EssentialDocs from "./Pages/EssentialDocs";
import Resources from "./Pages/Resources";
import NavBar from "./Navbar/Navbar";
import FindAService from "./Pages/FindAService";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/findaservice" element={<FindAService />} />
          <Route path="/disabilityInfo" element={<DisabilityInfo />} />
          <Route path="/essentialDocs" element={<EssentialDocs />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
