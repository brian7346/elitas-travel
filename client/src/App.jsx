import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatePlanePage } from "./pages/create-plane-page";
import { HomePage } from "./pages/home-page";
import { PlanePage } from "./pages/plane-page";
import { paths } from "./paths";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ paths.home } element={<HomePage />} />
        <Route path={ `${paths.plane}/:id` } element={<PlanePage />} />
        <Route path={ paths.createPlane } element={<CreatePlanePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
