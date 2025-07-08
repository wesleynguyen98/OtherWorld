import { Route, Routes } from "react-router-dom";
import PortalPage from "./pages/PortalPage.tsx";

import HomePage from "./pages/HomePage.tsx";

function App() {


  return (
    <Routes>
      <Route path="/" element={<PortalPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
