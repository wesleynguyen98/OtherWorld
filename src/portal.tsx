// src/Portal.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollLocks from "./hooks/useScrollLocks";

/* Portal component takes an onClose function as a prop.
   This function is called when the portal is closed, 
   allowing for navigation or other actions. */
export default function Portal({ onClose }: { onClose: () => void }) {
  const [isOpening, setIsOpening] = useState(false);
  
  useScrollLocks(true); // Lock scroll when portal is open

  /* Sets isOpening to true and calls 
   the passed in onClose f() after a delay. */
  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => onClose(), 1200);
  };

  return (
    <AnimatePresence>
      {!isOpening && (
        /* Unmounting component animates with exit funcion */
        <motion.div className="overflow-hidden" exit={{ opacity: 0, transition: { duration: 1 } }}>
          <motion.div
            className="relative w-full h-full overflow-hidden"
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            {/* Breathing image animation */}
            <motion.img
              src="/coraline-other-world-portal.jpg"
              alt="Coraline Portal"
              className="w-full h-full object-cover cursor-pointer"
              onClick={handleClick}
              animate={{
                scale: [1, 1.05, 1],
                x: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "easeInOut",
              }}
            />
            <motion.div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                color: "white",
                fontSize: "2rem",
                pointerEvents: "none",
                textShadow: "0 0 10px rgba(0,0,0,0.7)",
              }}
            >
              Enter Here
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
