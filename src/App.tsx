import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.js";
  import TicketPage from "./pages/Ticketpage.js";
import EventRegistrationPage from "./pages/events-page.tsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-event" element={<TicketPage />} />
          <Route path="/events/:id" element={<EventRegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
