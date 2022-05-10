import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatePlanePage } from "./pages/create-plane-page";
import { HomePage } from "./pages/home-page";
import { PlanePage } from "./pages/plane-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plane/:id" element={<PlanePage />} />
        <Route path="/create-plane" element={<CreatePlanePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
