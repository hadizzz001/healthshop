"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ResponsiveVideo = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/category");
        const data = await response.json();
        const selectedCategories = [data[0], data[1], data[2]].filter(Boolean);
        setCategories(selectedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const renderMedia = (category) => {
    if (category.img[0].endsWith(".mp4")) {
      return (
        <video
          className="w-full h-full object-cover rounded-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={category.img[0]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return (
      <img
        className="w-full h-full object-cover rounded-lg"
        src={category.img[0]}
        alt={category.name}
      />
    );
  };

  return (
    <>
      <div data-product-list-category="ymal-slider">
        <div className="padforcat">
          <h1 className="myntit mb-3 sm:mb-5" style={{ cursor: "pointer" }}>
            Our Collections
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            onClick={() => router.push("/search?cat=" + category.name)}
          >
            {renderMedia(category)}
<h3
  className="mt-3 text-lg font-semibold text-center myGray relative"
  style={{
    paddingBottom: "6px",
  }}
>
  {category.name}
  <span
    style={{
      content: '""',
      position: "absolute",
      left: "50%",
      bottom: "0",
      transform: "translateX(-50%)",
      width: "50%", // adjust if needed
      height: "2px",
      backgroundColor: "#146f29",
      display: "block",
    }}
  ></span>
</h3>

          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ResponsiveVideo;
