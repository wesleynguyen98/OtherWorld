import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CharactersPage from "./pages/CharactersPage";

import HomePage from "./pages/HomePage.tsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/characters" element={<CharactersPage />} /> */}
      </Route>
    </Routes>

  );
}
export default App;
