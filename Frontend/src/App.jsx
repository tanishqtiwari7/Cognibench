import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// Placeholder components for the routes

const Pricing = () => (
  <div className="p-8 pt-24">
    <h1 className="text-2xl">Pricing Page</h1>
  </div>
);
const Roadmap = () => (
  <div className="p-8 pt-24">
    <h1 className="text-2xl">Roadmap Page</h1>
  </div>
);
const Community = () => (
  <div className="p-8 pt-24">
    <h1 className="text-2xl">Community Page</h1>
  </div>
);
const Resources = () => (
  <div className="p-8 pt-24">
    <h1 className="text-2xl">Resources Page</h1>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/community" element={<Community />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
}

export default App;
