"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const SLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1000); // Hide after 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center bg-[#000] z-[9999]"
        >
          <img
            src="https://res.cloudinary.com/dpb42mz2q/image/upload/v1760636350/logo-removebg-preview_2_hijr0n.webp"
            alt="S Loader"
            width={100}
            height={100}
            className="w-34 h-34 object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SLoader;
