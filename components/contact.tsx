"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] text-white overflow-hidden relative">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-12"
        >
          IF THIS MADE SENSE TO YOU <br />
          <span className="text-neutral-500">— WE SHOULD TALK.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8 justify-center items-center"
        >
          <a href="mailto:vidushityagii1845@gmail.com" className="group flex items-center gap-3 text-2xl md:text-3xl font-light hover:text-neutral-400 transition-colors">
            <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span>vidushityagii1845@gmail.com</span>
          </a>

          <div className="hidden md:block w-px h-8 bg-neutral-800" />

          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/vidushityagi/" target="_blank" rel="noreferrer" className="text-xl text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
              LinkedIn <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/vidushi_tyagii/" target="_blank" rel="noreferrer" className="text-xl text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
              Instagram <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <footer className="mt-32 pt-8 border-t border-neutral-900 text-neutral-600 text-sm flex justify-between items-center">
          <p>© {new Date().getFullYear()} Vidushi Tyagi. All rights reserved.</p>
          <p>Portfolio </p>
        </footer>
      </div>
    </section>
  )
}
