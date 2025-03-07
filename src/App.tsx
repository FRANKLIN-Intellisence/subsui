import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.js";
import TicketVerification from "./pages/TicketVerification.js"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Verify_Ticket" element={<TicketVerification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
