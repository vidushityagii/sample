"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Texture/Motion (Subtle) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-[#0a0a0a] to-[#0a0a0a]" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"
        />
      </div>

      <div className="relative z-10 container px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6"
        >
          I MAKE VIDEOS
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">
            PEOPLE DON'T SKIP.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <p className="text-xl md:text-2xl text-neutral-400 font-light tracking-wide uppercase">
            Ads • Motion • Social • Stories
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Button
              variant="ghost"
              size="lg"
              className="group text-lg font-medium text-white hover:bg-white/10 rounded-full px-8 py-6 border border-white/20 transition-all duration-300 hover:scale-105"
              onClick={() => {
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Press Play on My Work <span className="ml-2 group-hover:translate-x-1 transition-transform">▶</span>
            </Button>

            <a
              href="https://drive.google.com/file/d/1gDkp6NpMC2838BhNbnKEJBDlNMIVjSDu/view?usp=drive_link"
              target="_blank"
              className="text-lg font-medium text-neutral-400 hover:text-white transition-colors"
            >
              Resume ↗
            </a>

            <Button
              variant="link"
              className="text-lg font-medium text-neutral-400 hover:text-white transition-colors p-0"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
