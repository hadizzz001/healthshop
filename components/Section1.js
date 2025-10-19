'use client';

import { motion } from 'framer-motion';

export default function EthicalSection() {
  return (
    <section className=" padforcat"> 

      <motion.div
        className="flex flex-col items-center text-center px-1"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Title aligned left */}
        <h3 className="sectitle mb-6 w-full text-left">Partners</h3>

        {/* Image stays centered */}
        <img
          src="https://res.cloudinary.com/dpb42mz2q/image/upload/v1760810854/1a4e35df-72da-49c9-9d4a-0d63a2209cdf-removebg-preview_bora3z.png"
          alt="Icon"
          className="w-full max-w-4xl mx-auto rounded-lg"
          style={{ margin: '0 1rem' }} 
        />
      </motion.div>
 
    </section>
  );
}
