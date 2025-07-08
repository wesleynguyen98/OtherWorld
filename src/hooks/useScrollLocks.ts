import { useEffect } from "react";

export default function useScrollLocks(isLocked: boolean = true) {
  // This hook locks or unlocks the scroll of the document body based on the isLocked
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);
}