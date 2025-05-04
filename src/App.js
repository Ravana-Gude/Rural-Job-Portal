import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DailyWageJobs from "./pages/DailyWageJobs";
import AgriculturalWork from "./pages/AgriculturalWork";
import HandicraftIndustries from "./pages/HandicraftIndustries";

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: "80px" }}> {/* Extra space to avoid content overlap */}
        <Header />
        <Routes>
          <Route path="/" element={<DailyWageJobs />} />
          <Route path="/agriculture" element={<AgriculturalWork />} />
          <Route path="/handicrafts" element={<HandicraftIndustries />} />
        </Routes>
      </div>
      <Footer /> {/* ✅ Footer placed outside of Routes, so it's always visible */}
    </Router>
  );
}

export default App;
