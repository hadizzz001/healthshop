import { useEffect, useState } from "react";

const PointsWatcher = () => {
  const [points, setPoints] = useState(() => {
    if (typeof window !== "undefined") {
      return parseInt(localStorage.getItem("userPoints") || "0");
    }
    return 0;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const interval = setInterval(() => {
        const current = parseInt(localStorage.getItem("userPoints") || "0");

        if (current !== points) {
          console.log("userPoints updated:", current);
          setPoints(current);
        }

      }, 500); // Poll every 0.5s

      return () => clearInterval(interval);
    }
  }, [points]);

  return null; // No popup or UI rendered
};

export default PointsWatcher;
