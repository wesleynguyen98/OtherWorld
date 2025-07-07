import { useState } from "react";
import Portal from "./portal.tsx";

function App() {
  const [showPortal, setShowPortal] = useState(true);

  return (
    <div className="h-screen w-screen bg-[#f5f0e6]">
      {showPortal && <Portal onClose={() => setShowPortal(false)} />}
      {!showPortal && (
        <div className="flex items-center justify-center h-full text-white text-xl">
          🎉 The world behind the portal is now revealed.
        </div>
      )}
    </div>
  );
}

export default App;
