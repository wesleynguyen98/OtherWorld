// App.tsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PortalPage from "./pages/PortalPage";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      {/* Route WITHOUT layout */}
      <Route path="/" element={<PortalPage />} />

      {/* Routes WITH layout */}
      <Route element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
