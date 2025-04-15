// app/components/Hero.jsx
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Discover the Perfect Style <br />
            <span className="text-teal-400">for Every Occasion</span>
          </h1>
          <p className="text-lg text-slate-300">
            Shop premium Qamis and traditional wear with modern elegance. Crafted for comfort, designed to impress.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/collections/qamis"
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-2xl transition duration-300"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="border border-white/30 hover:bg-white/10 text-white py-3 px-6 rounded-2xl transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative"
        >
          <img
            src="/hero-qamis.png" // make sure this image exists in your /public directory or update the path
            alt="Premium Qamis"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>

      {/* GLOW BACKGROUND EFFECT */}
      <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-teal-400/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] bg-pink-400/20 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
}
