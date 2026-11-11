"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-20 right-5 z-40 grid h-11 w-11 place-items-center border border-gold/40 bg-ink/80 text-gold backdrop-blur-md transition-colors hover:border-gold hover:bg-gold hover:text-ink sm:bottom-24 sm:right-8"
        >
          <ArrowUp size={16} strokeWidth={1.75} aria-hidden />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
