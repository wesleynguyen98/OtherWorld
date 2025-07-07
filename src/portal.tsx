// src/Portal.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portal({ onClose }: { onClose: () => void }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => onClose(), 1200);
  };

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden"
          initial={{ clipPath: "circle(100% at 50% 50%)" }}
          animate={{
            clipPath: isOpening
              ? "circle(0% at 50% 50%)"
              : "circle(100% at 50% 50%)",
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}