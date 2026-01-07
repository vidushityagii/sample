"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 py-6 px-8 flex justify-between items-center mix-blend-difference"
    >
      <Link href="/" className="text-xl font-bold tracking-tighter text-white">
        VIDUSHI TYAGI
      </Link>

      <div className="flex gap-6">
        <Link href="mailto:contact@vidushi.com" className="text-sm font-medium text-white hover:opacity-70 transition-opacity">
          CONTACT
        </Link>
      </div>
    </motion.nav>
  )
}
