import { Route, Routes } from "react-router-dom";
import PortalPage from "./pages/PortalPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";

import HomePage from "./pages/HomePage.tsx";

function App() {


  return (
    <Routes>
      <Route path="/" element={<PortalPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
